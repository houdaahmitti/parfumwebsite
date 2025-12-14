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
        
        <div class="container">
        <h1>HOME PAGE </h1>
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
</style>