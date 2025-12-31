<template>
    <div class="femme-page">
        <aside class="left-filter">
        <Search />
        </aside>

    <!-- Right : Content -->
    <main class="right-content">
      <h1 class="page-title">Parfums Femme</h1>

      <div class="products-placeholder">
        <p>Produits Femme ici...</p>
      </div>
    </main>

    </div>
</template>

<script>
    import Search from "@/components/search.vue";

        export default {
        name : 'femme',
        components:{
        Search,
        },
    }
</script>

<style>
   
/* ===== Layout ===== */
.femme-page {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* ===== Left Filter ===== */
.left-filter {
  flex: 0 0 280px;
}

/* ===== Right Content ===== */
.right-content {
  flex: 1;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1c1c1c;
}

/* Placeholder products */
.products-placeholder {
  background: #fafafa;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  color: #777;
  font-size: 0.95rem;
}

/* ===== Responsive ===== */
@media (max-width: 992px) {
  .femme-page {
    flex-direction: column;
  }

  .left-filter {
    flex: 1;
  }
}    
</style>
