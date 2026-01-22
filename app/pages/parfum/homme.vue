<template>
  <div class="homme-page">

    <!-- Left : Search -->
    <aside class="left-filter">
      <Search @change="updateFilters" />
    </aside>

    <!-- Right : Content -->
    <main class="right-content">
      <h1 class="page-title">Parfums Homme</h1>

      <div v-if="loading" class="text-center">Chargement...</div>
      <div v-else class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="p in filteredProducts"
            :key="p._id"
          >
            <div class="product-card alt-style">

              <div class="product-image">
                <img :src="p.image" :alt="p.name" />

                <div class="overlay">
                  <button class="btn-cart" @click="addToCartHandler(p)">
                    <i class="fas fa-shopping-cart"></i>
                    Ajouter au panier
                  </button>
                </div>
              </div>

              <div class="product-body">
                <h3>{{ p.name }}</h3>
                <p>Parfum Homme · {{ p.volume }}</p>

                <div class="price-box">
                  <span v-if="p.oldPrice" class="old-price">
                    {{ p.oldPrice }} DH
                  </span>
                  <span class="price">
                    {{ p.price }} DH
                  </span>
                </div>
              </div>

            </div>
          </div>

          <p v-if="filteredProducts.length === 0" class="text-center">
            Aucun produit trouvé ❌
          </p>

        </div>
      </div>

      <div v-if="error" class="text-danger text-center">{{ error }}</div>
    </main>
  </div>
</template>

<script>
import Search from "@/components/search.vue";
import api from "../../../services/api";
import { addToCart } from "../../../services/cart";
import { ref, computed } from "vue";

export default {
  name: "homme",
  components: { Search },

  setup() {
    const products = ref([]);
    const filters = ref({});
    const loading = ref(false);
    const error = ref("");

    const filteredProducts = computed(() => {
      return products.value.filter((p) => {
        if (filters.value.search &&
            !p.brand.toLowerCase().includes(filters.value.search.toLowerCase()))
          return false;

        if (filters.value.brands?.length &&
            !filters.value.brands.includes(p.brand))
          return false;

        if (filters.value.volumes?.length &&
            !filters.value.volumes.includes(p.volume))
          return false;

        if (p.price > (filters.value.price || 99999))
          return false;

        return true;
      });
    });

    const updateFilters = (f) => {
      filters.value = f;
    };

    const loadProducts = async () => {
      loading.value = true;
      error.value = "";
      try {
        const res = await api.get("/products?category=homme");
        products.value = res.data;
      } catch (err) {
        console.error("❌ Erreur chargement produits:", err);
        error.value = "Impossible de charger les produits.";
      } finally {
        loading.value = false;
      }
    };

    const addToCartHandler = (product) => {
      addToCart(product);
      alert(`Produit "${product.name}" ajouté au panier ✅`);
    };

    loadProducts();

    return {
      products,
      filters,
      filteredProducts,
      updateFilters,
      addToCartHandler,
      loading,
      error
    };
  }
};
</script>


<style scoped>

/* ===== Layout ===== */
.homme-page {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* ===== Left Filter ===== */
.left-filter {
  flex: 0 0 280px;
}

/* ===== Right Content ===== */
.right-content {
  flex: 1;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1c1c1c;
}

/* Placeholder products */
.products-placeholder {
  background: #fafafa;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  color: #777;
  font-size: 0.95rem;
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .homme-page {
    flex-direction: column;
  }

  .left-filter {
    flex: 1;
  }
}
</style>
