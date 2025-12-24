<template>
        <div class="py-5 container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="main-heading">About Us</h1>
                    <div class="underline mx-auto"></div>
                    <p>
                        Love Parfum est votre plateforme dédiée aux passionnés de parfums, offrant une expérience unique de shopping en ligne au Maroc. Nous sélectionnons avec soin des fragrances authentiques et originales, pour vous proposer des senteurs raffinées et inoubliables.
                    </p>
                </div>
            </div>

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
                Details
            </NuxtLink>
            </div>
        </div>

            <div class="py-5 bg-gray">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 text-center">
                            <h1 class="main-heading">Parfum</h1>
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
                            <span class="price">199,00 DH</span>
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
                            <span class="price">299,00 DH</span>
                            </div>

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
                            <span class="price">200,00 DH</span>
                            </div>

                        </div>
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
.main-heading {
  font-size: 42px;
  font-weight: 800;
  color: #111827;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.container p {
  font-size: 16px;
  color: #4b5563;
  max-width: 800px;
  margin: auto;
  line-height: 1.8;
}

/* ===== AVANTAGES ===== */
.row.text-center .col-md-3 {
  padding: 30px 15px;
  transition: all 0.35s ease;
}

.row.text-center .col-md-3:hover {
  transform: translateY(-10px);
}

.row.text-center img {
  width: 55px;
  height: auto;
  margin-bottom: 15px;
  opacity: 0.85;
  transition: 0.3s ease;
}

.row.text-center .col-md-3:hover img {
  opacity: 1;
  transform: scale(1.1);
}

.row.text-center h5 {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 10px;
  color: #111827;
}

.row.text-center p {
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
}

/* ===== DETAILS BUTTON ===== */
.details-btn {
  display: inline-block;
  padding: 12px 36px;
  background: linear-gradient(90deg, #97446d, #210B5B);
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