<template>
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="1500">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="/img/PAGE1.png" class="d-block w-100" alt="slide 1">
                </div>
                <div class="carousel-item">
                <img src="/img/PAGE2.png" class="d-block w-100" alt="slide 2">
                </div>
                <div class="carousel-item">
                <img src="/img/PAGE3.png" class="d-block w-100" alt="slide 3">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
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
                            <h1 class="main-heading">Our Service</h1>
                            <div class="underline mx-auto"></div>
                        </div>

                            <div class="col-md-4">
                            <div class="box-card">
                                <div class="box-card-img">
                                <img src="/img/parfum/5.webp" class="w-100" alt="web parfum">
                                <button class="add-to-cart">AJOUTER AU PANIER</button>
                                </div>
                                <div class="box-card-body">
                                <h3 class="box-card-heading">Champ De Rose Jacques Yves</h3>
                                <div class="underline"></div>
                                <p>Fragrance World Parfum Femme 100ml - 199,00 د.م</p>
                                </div>
                            </div>   
                            </div>

                            <div class="col-md-4">
                            <div class="box-card">
                                <img src="/img/parfum/3.webp" class="w-100" alt="web parfume">
                                <div class="box-card-body">
                                <h3 class="box-card-heading"></h3>
                                <div class="underline"></div>
                                <p>Lorem ipsum dolor sit amet.. 
                                </p>
                            </div>
                            </div>   
                            </div>

                            <div class="col-md-4">
                            <div class="box-card">
                                <img src="/img/parfum/4.webp" class="w-100" alt="web parfume">
                                <div class="box-card-body">
                                <h3 class="box-card-heading"></h3>
                                <div class="underline"></div>
                                <p>Lorem ipsum dolor sit amet.. 
                                </p> 
                            </div>
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
.carousel-inner img {
       width: 90%; 
      height:70vh; 
      object-fit:contain; 
      background: linear-gradient(135deg, #0d1b2a, #274c91); /* gradient bleu foncé */
}
.box-card-img {
  position: relative;
  overflow: hidden;
}

.box-card-img img {
  display: block;
  width: 100%;
  height: auto;
}

.add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px;
  background-color: rgba(0, 128, 0, 0.7); /* vert transparent */
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.3s;
}

.box-card-img:hover .add-to-cart {
  opacity: 1;
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