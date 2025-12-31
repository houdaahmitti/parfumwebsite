<template>
  <div class="homme-page">
    <!-- Left : Search -->
    <aside class="left-filter">
      <Search />
    </aside>

    <!-- Right : Content -->
    <main class="right-content">
      <h1 class="page-title">Parfums Homme</h1>

      <div class="products-placeholder">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 text-center">
                            <h1 class="main-heading">Offres Spéciales Parfums</h1>
                            <div class="underline mx-auto"></div>
                        </div>  

                        <div class="col-md-4">
                        <div class="product-card alt-style">

                            <div class="product-image">

                                <img src="/img/parfum/Bleu de Chanel.webp" alt="Bleu de Chanel">

                            <div class="overlay">
                                <button class="btn-cart">
                                <i class="fas fa-shopping-cart"></i> Ajouter au panier
                                </button>
                            </div>
                            </div>

                            <div class="product-body">
                                <h3>Bleu de Chanel</h3>
                                <p>Parfum Homme · 100ml</p>
                                <div class="price-box">
                                    <span class="old-price">249,00 DH</span>
                                    <span class="price">199,00 DH</span>
                                </div>
                            </div>

                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="product-card alt-style">

                            <div class="product-image">
                                <img src="/img/parfum/Chanel_n5.webp" alt="Chanel_n5">

                            <div class="overlay">
                                <button class="btn-cart">
                                <i class="fas fa-shopping-cart"></i> Ajouter au panier
                                </button>
                            </div>
                            </div>

                            <div class="product-body">
                            <h3>Chanel N5</h3>
                            <p>Parfum Femme · 100ml</p>
                                <div class="price-box">
                                    <span class="old-price">849,00 DH</span>
                                    <span class="price">399,00 DH</span>
                                </div>                            </div>

                        </div>
                        </div>


                        <div class="col-md-4">
                        <div class="product-card alt-style">

                            <div class="product-image">
                            <img src="/img/parfum/dior-jadore.webp" alt="dior-jadore">

                            <div class="overlay">
                                <button class="btn-cart">
                                <i class="fas fa-shopping-cart"></i> Ajouter au panier
                                </button>
                            </div>
                            </div>

                            <div class="product-body">
                            <h3>Dior J’adore</h3>
                            <p>Parfum Femme · 50ml</p>
                                <div class="price-box">
                                    <span class="old-price">949,00 DH</span>
                                    <span class="price">599,00 DH</span>
                                </div>                            </div>

                        </div>
                        </div>
                   </div>
                </div>
              </div>
    </main>
  </div>
</template>

<script>
import Search from "@/components/search.vue";

export default {
  name: "homme",
  components: {
    Search,
  },
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
