<template>
  <div class="py-5 container">
    <!-- About Section -->
    <section class="py-5 container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">À propos de nous</h2>
          <div class="underline mx-auto"></div>
          <div class="about-box mx-auto mt-4">
            <p>
              Love Parfum est votre plateforme dédiée aux passionnés de parfums, offrant
              une expérience unique de shopping en ligne au Maroc. Nous sélectionnons
              avec soin des fragrances authentiques et originales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages Section -->
    <div class="row text-center mt-5">
      <div class="col-md-3">
        <img src="/img/icone-livraison.webp" alt="Livraison Express" style="width:70px; height:60px;">
        <h5 class="mt-3">LIVRAISON EXPRESS</h5>
        <p>Entre 24 et 48 heures partout au Maroc</p>
      </div>
      <div class="col-md-3">
        <img src="/img/icone-SUPPORT.webp" alt="Support 24/7" style="width:50px; height:50px;">
        <h5 class="mt-3">24/7 SUPPORT</h5>
        <p>Conseil personnalisé</p>
      </div>
      <div class="col-md-3">
        <img src="/img/icone-authentiques.webp" alt="Parfums authentiques" style="width:50px; height:50px;">
        <h5 class="mt-3">Parfums authentiques</h5>
        <p>Des fragrances originales aux notes raffinées</p>
      </div>
      <div class="col-md-3">
        <img src="/img/icone-fidélité.webp" alt="Avantages fidélité" style="width:50px; height:50px;">
        <h5 class="mt-3">Avantages fidélité</h5>
        <p>5% de votre commande sur vos prochains achats</p>
      </div>
    </div>

    <div class="text-end mt-4">
      <NuxtLink to="/about" class="details-btn">Details →</NuxtLink>
    </div>

    <!-- Offres Spéciales Parfums -->
    <div class="py-5 bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="main-heading">Offres Spéciales Parfums</h1>
            <div class="underline mx-auto"></div>
          </div>

          <!-- Loader / Error -->
          <div v-if="loading" class="col-12 text-center my-5">Chargement des produits...</div>
          <div v-if="error" class="col-12 text-center text-danger my-5">{{ error }}</div>

          <!-- Afficher 3 produits maximum -->
          <div class="col-md-4" v-for="product in firstThreeProducts" :key="product._id">
            <div class="product-card alt-style">
              <div class="product-image">
                <span v-if="product.discount > 0" class="badge-discount">-{{ product.discount }}%</span>
                <img :src="product.image" :alt="product.name">
                <div class="overlay">
                  <button class="btn-cart" @click="addToCartHandler(product)">
                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                  </button>
                </div>
              </div>
              <div class="product-body">
                <h3>{{ product.name }}</h3>
                <p>{{ product.category }} · {{ product.volume }}</p>
                <div class="price-box">
                  <span class="old-price">{{ product.oldPrice }} DH</span>
                  <span class="price">{{ product.price }} DH</span>
                </div>
                <!-- Bouton pour rediriger vers page Homme ou Femme -->
                <NuxtLink
                  :to="product.category === 'Homme' ? '/parfum/homme' : '/parfum/femme'"
                  class="details-btn mt-2 d-block text-center"
                >
                  Voir plus →
                </NuxtLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { addToCart } from "../../services/cart";

const products = ref([]);
const loading = ref(false);
const error = ref(null);

// Charger tous les produits
const loadProducts = async () => {
  loading.value = true;
  try {
    const res = await fetch("http://localhost:5000/api/products");
    if (!res.ok) throw new Error("Erreur lors du chargement des produits");
    products.value = await res.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

// Prendre les 3 premiers produits
const firstThreeProducts = computed(() => products.value.slice(0, 3));

const addToCartHandler = (product) => {
  addToCart(product);
  alert(`Produit "${product.name}" ajouté au panier ✅`);
};

onMounted(loadProducts);
</script>

<style>
    
/* ===== ABOUT SECTION ===== */
/* Boîte À propos */
.about-box {
  background-color: #f9f9f9;
  padding: 25px 30px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  color: #333;
}

/* Titre principal */
.main-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
}



/* Cartes avantages */
.row.text-center .col-md-3 {
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 20px;
}

.row.text-center .col-md-3:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

/* Images avantages */
.row.text-center .col-md-3 img {
  margin-bottom: 15px;
}

/* Bouton Details */
.details-btn {
  display: inline-block;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.details-btn:hover {
  background-color: #e65a50;
}

/* ===== DETAILS BUTTON ===== */
.details-btn {
  display: inline-block;
  padding: 12px 36px;
  background: linear-gradient(90deg, #171342, #472fdd);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

.details-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.35);
}

</style>