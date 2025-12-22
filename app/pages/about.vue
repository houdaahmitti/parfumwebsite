<template>
    <div>
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
        
            <section class="client-feedback">
                <div class="container">
                    <div class="row align-items-center">

                    <!-- LEFT TEXT -->
                    <div class="col-md-6">
                        <h2 class="title">Client Feedback</h2>

                        <p class="feedback-text">
                        <i class="fas fa-quote-left"></i>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        <i class="fas fa-quote-right"></i>
                        </p>

                        <h5 class="client-name">— David Jenson</h5>
                    </div>

                    <!-- RIGHT AVATARS -->
                    <div class="col-md-6">
                        <div class="circle-wrapper">

                        <div class="circle big"></div>
                        <div class="circle medium"></div>

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

                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'about',
        head() {
        return {
        title: 'About Us',
        meta: [
            { hid: 'description', name: 'description', content: 'Love Parfum- About Us' },
            { hid: 'keywords', name: 'keywords', content: 'Vue, Nuxt, JavaScript, About Us' }
        ]
        }
    }
    }
</script>
<style>
.client-feedback {
  background: #f7f7f7;
  padding: 80px 0;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
}

.feedback-text {
  color: #777;
  font-size: 16px;
  line-height: 1.7;
}

.feedback-text i {
  color: #ccc;
  font-size: 20px;
}

.client-name {
  margin-top: 15px;
  font-weight: bold;
}

/* circles */
.circle-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid #ddd;
}

.circle.big {
  width: 300px;
  height: 300px;
  top: 0;
  left: 0;
}

.circle.medium {
  width: 200px;
  height: 200px;
  top: 50px;
  left: 50px;
}

/* avatars */
.avatar {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
}

.avatar-1 {
  top: -10px;
  left: 120px;
}

.avatar-2 {
  right: -10px;
  top: 120px;
}

.avatar-3 {
  bottom: 20px;
  left: 30px;
}

</style>