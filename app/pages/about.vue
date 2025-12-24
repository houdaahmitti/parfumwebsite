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
                    <div class="col-md-6 d-flex justify-content-center">
                      <div class="circle-wrapper">

                        <!-- circles -->
                        <div class="circle big"></div>
                        <div class="circle medium"></div>

                        <!-- avatars -->
                        <img src="/img/avatar1.jpg" class="avatar avatar-1" alt="">
                        <img src="/img/avatar2.jpg" class="avatar avatar-2" alt="">
                        <img src="/img/avatar3.jpg" class="avatar avatar-3" alt="">

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
/* ===== ABOUT SECTION ===== */
.main-heading {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #12233c;
}

.underline {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #97446d, #210B5B);
  margin: 14px auto;
  border-radius: 4px;
}

.container p {
  max-width: 720px;
  margin: 0 auto;
  font-size: 16px;
  color: #555;
  line-height: 1.8;
}

/* ===== CLIENT FEEDBACK ===== */
.client-feedback {
  background: linear-gradient(135deg, #f9f9fb, #f1f1f6);
  padding: 90px 0;
  margin-top: 80px;
  border-radius: 40px;
}

.client-feedback .title {
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 25px;
  color: #12233c;
}

.feedback-text {
  font-size: 17px;
  line-height: 1.8;
  color: #555;
  position: relative;
}

.feedback-text i {
  color: #97446d;
  font-size: 22px;
}

.client-name {
  margin-top: 20px;
  font-weight: 700;
  color: #210B5B;
}

/* ===== CIRCLES DESIGN ===== */
.circle-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  margin: auto;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(151,68,109,0.3);
}

.circle.big {
  width: 320px;
  height: 320px;
  animation: rotateSlow 18s linear infinite;
}

.circle.medium {
  width: 220px;
  height: 220px;
  top: 50px;
  left: 50px;
  border-color: rgba(33,11,91,0.35);
  animation: rotateSlowReverse 14s linear infinite;
}

@keyframes rotateSlow {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

@keyframes rotateSlowReverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0); }
}

/* ===== AVANTAGES ===== */
.row.text-center.mt-5 > div {
  background: #fff;
  border-radius: 22px;
  padding: 30px 20px;
  transition: all 0.35s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.row.text-center.mt-5 > div:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 45px rgba(0,0,0,0.15);
}

.row.text-center.mt-5 img {
  filter: drop-shadow(0 6px 10px rgba(0,0,0,0.15));
}

.row.text-center.mt-5 h5 {
  margin-top: 18px;
  font-weight: 700;
  color: #12233c;
}

.row.text-center.mt-5 p {
  font-size: 14px;
  color: #666;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .main-heading {
    font-size: 32px;
  }

  .client-feedback {
    border-radius: 20px;
  }

  .circle-wrapper {
    width: 260px;
    height: 260px;
    margin-top: 40px;
  }

  .circle.big {
    width: 260px;
    height: 260px;
  }

  .circle.medium {
    width: 170px;
    height: 170px;
    top: 45px;
    left: 45px;
  }
}
/* ===== avatar ===== */
.avatar {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  transition: transform 0.3s;
}

.avatar:hover {
  transform: scale(1.15);
}

/* positions */
.avatar-1 {
  top: -10px;
  left: 130px;
}

.avatar-2 {
  right: -10px;
  top: 120px;
}

.avatar-3 {
  bottom: 20px;
  left: 40px;
}


</style>