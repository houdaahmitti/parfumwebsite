<template>
                <div id="carouselHero" class="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel" data-bs-interval="3000">

                    <!-- Indicators -->
                    <div class="carousel-indicators hero-indicators">
                        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="2"></button>
                    </div>

                    <!-- Slides -->
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                        <img src="/img/page1.1.jpg" class="d-block w-100" alt="slide 1">
                        <div class="carousel-overlay">
                            <h2>Love Parfum</h2>
                            <p>Découvrez l’élégance absolue</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <img src="/img/page1.2.jpg" class="d-block w-100" alt="slide 2">
                        <div class="carousel-overlay">
                            <h2>Parfums d’Exception</h2>
                            <p>Une signature qui vous ressemble</p>
                        </div>
                        </div>

                        <div class="carousel-item">
                        <img src="/img/page1.3.jpg" class="d-block w-100" alt="slide 3">
                        <div class="carousel-overlay">
                            <h2>Luxe & Authenticité</h2>
                            <p>Des marques iconiques</p>
                        </div>
                        </div>
        </div>

        <!-- Controls -->
        <button class="carousel-control-prev hero-control" type="button"
                data-bs-target="#carouselHero" data-bs-slide="prev">
            ‹
        </button>

        <button class="carousel-control-next hero-control" type="button"
                data-bs-target="#carouselHero" data-bs-slide="next">
            ›
        </button>

        </div>

        
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
/* GLOBAL */
.hero-carousel {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
}

/* IMAGE */
.hero-carousel img {
  height: 70vh;
  object-fit: cover;
}

/* OVERLAY */
.carousel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.15)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  color: #fff;
}

/* TEXT */
.carousel-overlay h2 {
  font-size: 52px;
  font-weight: 900;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.carousel-overlay p {
  font-size: 20px;
  max-width: 420px;
  opacity: 0.9;
}

/* INDICATORS */
.hero-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.4;
  transition: 0.3s;
}

.hero-indicators .active {
  opacity: 1;
  transform: scale(1.4);
}

/* CONTROLS */
.hero-control {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  color: white;
  font-size: 32px;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  backdrop-filter: blur(6px);
  transition: 0.3s;
}

.hero-control:hover {
  background: rgba(255,255,255,0.45);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-carousel img {
    height: 50vh;
  }

  .carousel-overlay h2 {
    font-size: 32px;
  }

  .carousel-overlay p {
    font-size: 16px;
  }
}

.details-btn {
    display: inline-block;
    padding: 12px 30px;
    background-color: #0e4c92; /* couleur principale */
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 25px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.details-btn:hover {
    background-color: #07366f; /* couleur hover plus foncée */
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0,0,0,0.3);
}
 

</style>