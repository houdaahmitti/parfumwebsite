<template>
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
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
       <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              parfum
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">parfum homme</a></li>
              <li><a class="dropdown-item" href="#">parfum woman</a></li>
            </ul>
          </li>
        <li class="nav-item">
          <NuxtLink to="/about" class="nav-link">About Us</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contact" class="nav-link">Contact Us</NuxtLink>
        </li>    
        </ul>
       
    <div class="d-flex align-items-center ms-auto">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-link text-dark me-3" type="button"> 
          <i class="fas fa-search"></i>
          </button>
          <NuxtLink to="/account" class="btn btn-link text-dark me-3">
            <i class="fas fa-user"></i>
          </NuxtLink>
          <NuxtLink to="/cart" class="btn btn-link text-dark position-relative">
            <i class="fas fa-shopping-cart"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             00,0 DH
            </span>
          </NuxtLink>
    </div>
    </div>
  </div>
</nav>
</template>

<script setup>
</script>
<style>
  .logo-img{
     width:100px;
     height: 80px;
  }
  .navbar .nav-link,
.navbar .dropdown-toggle {
  color: #12233c !important;   /* couleur souhaitée */
  font-weight: 500;            /* optionnel, texte un peu bold */
}

.navbar .nav-link:hover,
.navbar .dropdown-toggle:hover {
  color: #97446d !important;   /* couleur hover optionnelle */
}

.navbar .dropdown-menu .dropdown-item {
  color: #12233c;              /* couleur items dropdown */
}

.navbar .dropdown-menu .dropdown-item:hover {
  background-color: #f0f0f0;   /* hover léger sur dropdown */
  color: #97446d;
}

</style>
