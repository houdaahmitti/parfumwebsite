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
              <li><a href="mailto:testtest@gmail.com"><i class="icofont-email"></i> &nbsp;  LovePafum@gmail.com</a></li>
              <li><a href="tel://0500000000"><i class="icofont-phone"></i> &nbsp; +212 666126743</a></li>
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
footer {
  font-size: 14px;
}
.footer_title {
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
}
.footer-bottom {
  text-align: center;       
  display: flex;             
  justify-content: center;   
  align-items: center;     
  gap: 6px;                 
  font-size: 15px;
}
.footer-logo {
  width: 60px;   
  margin-left: 5px; 
}
.footer_list {
  list-style: none;
}
.icofont-email, .icofont-phone {
  color: #ffffff;        
  font-size: 14px;      
}

.footer_list a {
  color: #ffffff;        
  text-decoration: none; 
  font-size: 14px;
}

.footer_list a:hover {
  color: #7a3a5a;     
}

.desc {
  font-size: 14px;
  line-height: 1.7;
   text-align: justify;    
  text-justify: inter-word; 
   max-width: 500px;
    margin: 0 auto; 
}



.social-icons i {
  font-size: 20px;
  transition: color 0.3s;
  
}
.social-icons a:hover i {
  color: #6d3a53; /* exemple rose au hover */
}
a.text-white:hover {
  text-decoration: none;
}
footer {
  background: linear-gradient(135deg, #0d1b2a, #274c91); /* gradient bleu foncé */
  color: #ffffff;
  width: 100%;
  padding: 50px 0;
}
</style>