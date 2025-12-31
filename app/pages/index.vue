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
            <NuxtLink to="/about" class="details-btn">
                Details →
            </NuxtLink>
            </div>
        </div>

            <div class="py-5 bg-gray">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 text-center">
                            <h1 class="main-heading">Offres Spéciales Parfums</h1>
                            <div class="underline mx-auto"></div>
                        </div>  

                        <div class="col-md-4">
                        <div class="product-card alt-style">

                            <div class="product-image">
                                <span class="badge-discount">-60%</span>
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
                                <span class="badge-discount">-50%</span>
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
                                <span class="badge-discount">-50%</span>
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
                        <div class="text-end mt-4">
                        <NuxtLink to="/about" class="details-btn">
                            More →
                        </NuxtLink>
                        </div>

                   </div>
                </div>
           </div>
</template>
<script>
    export default {
    name: 'index',
    head() {
        return {
        title: 'Home page',
        meta: [
            { hid: 'description', name: 'description', content: 'Love Parfum- Home page' },
            { hid: 'keywords', name: 'keywords', content: 'Vue, Nuxt, JavaScript, Home page' }
        ]
        }
    }
    }
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