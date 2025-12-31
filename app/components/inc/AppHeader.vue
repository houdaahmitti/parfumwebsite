<template>
  <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white shadow">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/img/parfum1.png" alt="Logo" class="logo-img d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" active-class="active-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Parfum
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NuxtLink to="/parfum/homme" class="dropdown-item">
                    Parfum Homme
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/parfum/femme" class="dropdown-item">
                    Parfum Femme
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
            </li>    
            </ul>
          
          <div class="d-flex align-items-center ms-auto gap-2">

            <input class="form-control search-input" type="search" placeholder="Search" />

            <button class="icon-btn" type="button">
              <i class="fas fa-search"></i>
            </button>

            <NuxtLink to="/account" class="icon-btn">
              <i class="fas fa-user"></i>
            </NuxtLink>

            <NuxtLink to="/cart" class="icon-btn position-relative">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-badge">00.0dh</span>
            </NuxtLink>

          </div>
        </div>
      </div>
    </nav>

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

   </div> 
</template>

<script setup>
</script>

<style scoped>
.logo-img{
     width:90px;
     height: auto;
}

.navbar{
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  min-height: 72px;
    position: relative;
  z-index: 10000;
  overflow: visible;
}

.navbar .nav-link,
.navbar .dropdown-toggle {
  color: #12233c !important;   /* couleur souhaitée */
  font-weight: 500;            /* optionnel, texte un peu bold */
  position: relative;
}

.navbar .nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #97446d, #210B5B);
  transition: 0.3s;
}

.navbar .nav-link:hover::after {
  width: 100%;
}

.icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #12233c;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease;
}

.icon-btn:hover {
  background: rgba(151,68,109,0.12);
  color: #97446d;
  transform: translateY(-2px);
}

.search-input {
  border-radius: 30px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.search-input:focus {
  outline: none;
  border-color: #97446d;
  box-shadow: 0 0 6px rgba(151,68,109,0.3);
}

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background:linear-gradient(90deg, #171342, #472fdd);
  color: white;
  font-size: 10px;        
  font-weight: 600;
  padding: 1px 4px;      
  border-radius: 50%;     
  min-width: 18px;        
  text-align: center;
  line-height: 1;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.icon-btn:hover .cart-badge {
  transform: scale(1.2);
}

/* active home */
.active-link {
  color: #97446d !important;
  font-weight: 600;
}
.active-link::after {
  width: 100% !important;
}


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
</style>
