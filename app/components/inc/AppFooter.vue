<template>
  <footer class="bg-gray-900   text-center ">
    <div class="row justify-between items-start mb-10">
      <div class="footer-top d-flex justify-content-center align-items-start gap-5 flex-wrap"> 
        <!-- Address -->
        <div class="col-lg-5 col-12 mb-5">
          <div class="footer_title">Love Parfum</div>
          <div class="footer_list">
            <div class="desc"> une parfumerie Maroc en ligne qui propose aux amateurs de belles fragrances un service soigné, une assistance olfactive personnalisée et des parfums authentiques.</div>
          </div>
        </div>
        
        <div class="col-md-6 col-lg-4 text-center footer-contact d-flex flex-column">
         <div class="footer-contact-inner">
          <div class="footer_title">Contactez-nous</div>
          <div class="newsletter_container">
            <ul class="footer_list">
              <li><a href="mailto:testtest@gmail.com"><i class="fas fa-envelope"></i> &nbsp;  Email: LovePafum@gmail.com</a></li>
              <li><a href="tel://0500000000"><i class="fas fa-phone"></i> &nbsp; Tel: +212 666126743</a></li>
            </ul>
            <div class="social-icons mt-2 ">
              <a href="https://www.facebook.com" target="_blank" class="text-white me-3">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" class="text-white me-3">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" class="text-white">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="footer-bottom">
        Copyright © 2026 
        <span>Love Parfum</span>
        <img src="/img/parfumlogo.png" class="footer-logo" alt="">
        | All rights reserved
      </div>
   </div>
  </footer>
</template>

<script setup>
// Hna ila bghiti t3mil props, functions...
</script>

<style scoped>
/* ===== FOOTER GLOBAL ===== */
footer {
  background: linear-gradient(135deg, #0c0e29, #143d89);
  color: #e5e7eb;
  padding: 70px 0 30px;
  font-size: 14px;
}

/* ===== TITLES ===== */
.footer_title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 18px;
  position: relative;
}

.footer_title::after {
  content: "";
  display: block;
  width: 45px;
  height: 3px;
  margin: 8px auto 0;
  background: linear-gradient(90deg, #97446d, #210B5B);
  border-radius: 3px;
}

/* ===== DESCRIPTION ===== */
.desc {
  font-size: 14px;
  line-height: 1.8;
  color: #cbd5f5;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
}

/* ===== LINKS ===== */
.footer_list {
  list-style: none;
  padding: 0;
}

.footer_list li {
  margin-bottom: 10px;
}

.footer_list a {
  color: #e5e7eb;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer_list a i {
  color: #97446d;
}

.footer_list a:hover {
  color: #c084fc;
  padding-left: 4px;
}

/* ===== CONTACT BOX ===== */
.footer-contact-inner {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

/* ===== SOCIAL ICONS ===== */
.social-icons {
  margin-top: 15px;
}

.social-icons a {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.social-icons i {
  font-size: 16px;
  color: #fff;
}

.social-icons a:hover {
  background: linear-gradient(90deg, #97446d, #210B5B);
  transform: translateY(-3px);
}

/* ===== FOOTER BOTTOM ===== */
.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #cbd5f5;
}

.footer-bottom span {
  font-weight: 600;
  color: #fff;
}

/* ===== LOGO ===== */
.footer-logo {
  width: 45px;
  opacity: 0.9;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .footer_title::after {
    margin-left: auto;
    margin-right: auto;
  }

  .desc {
    text-align: center;
  }
}

</style>