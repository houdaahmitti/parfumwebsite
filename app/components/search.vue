<template>
  <div class="filter-sidebar">
    <!-- Search -->
    <div class="search-box">
      <h4>les marques :</h4>
      <input type="text" placeholder="Chercher une marque" v-model="searchBrand" />
    </div>

    <!-- Brands -->
    <div class="filter-section scroll">
      <label
        v-for="brand in filteredBrands"
        :key="brand.name"
        class="checkbox-item"
      >
        <input type="checkbox" v-model="selectedBrands" :value="brand.name" />
        <span>{{ brand.name }}</span>
        <small>({{ brand.count }})</small>
      </label>
    </div>

    <!-- Price -->
    <div class="filter-section">
      <h4>Filtrer par :</h4>
      <p class="section-title">Prix</p>

    <!-- Prix --> 
    <div class="filter-group">
      <label>Prix</label>
      <div class="price-slider">
        <input type="range" v-model="price" min="0" max="2000" step="3" />
        <span class="price-display">{{ price }} DH</span>
      </div>
    </div>

    <!-- Fabricants -->
    <div class="filter-section">
      <p class="section-title">Fabricants</p>
      <select v-model="selectedManufacturer">
        <option value="">--</option>
        <option v-for="f in manufacturers" :key="f">{{ f }}</option>
      </select>
    </div>

    <!-- Litrage -->
    <div class="filter-section scroll">
      <p class="section-title">Litrage</p>
      <label
        v-for="l in volumes"
        :key="l.name"
        class="checkbox-item"
      >
        <input type="checkbox" v-model="selectedVolumes" :value="l.name" />
        <span>{{ l.name }}</span>
        <small>({{ l.count }})</small>
      </label>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchBrand: "",
      price: 185,


      brands: [
        { name: "ACQUA DI PARMA", count: 30 },
        { name: "ARMANI", count: 41 },
        { name: "AZZARO", count: 12 },
        { name: "BON PARFUMEUR", count: 8 },
        { name: "BURBERRY", count: 5 },
        { name: "BVLGARI", count: 7 },
        { name: "CALVIN KLEIN", count: 9 },
        { name: "CAROLINA HERRERA", count: 4 },
        { name: "CARON", count: 10 },
        { name: "CARTIER", count: 9 },
      ],

      manufacturers: ["France", "Italie", "USA"],
      volumes: [
        { name: "30ml", count: 15 },
        { name: "40ml", count: 1 },
        { name: "50ml", count: 48 },
        { name: "60ml", count: 4 },
        { name: "75ml", count: 19 },
        { name: "100ml", count: 30 },
        { name: "125ml", count: 3 },
        { name: "150ml", count: 2 },
      ],

      selectedBrands: [],
      selectedManufacturer: "",
    };
  },

  computed: {
    filteredBrands() {
      return this.brands.filter(b =>
        b.name.toLowerCase().includes(this.searchBrand.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* ===== Container ===== */
.filter-container {
  max-width: 850px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  font-family: "Helvetica Neue", Arial, sans-serif;
}

/* ===== Search ===== */
.search-box input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  transition: border 0.3s, box-shadow 0.3s;
}

.search-box input:focus {
  outline: none;
  border-color: #97446d;
  box-shadow: 0 0 0 3px rgba(151,68,109,0.15);
}

/* ===== Sections ===== */
.filter-section {
  margin-top: 2rem;
}

.section-title {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.8rem;
  color: #333;
}

/* ===== Brands & Checkbox ===== */
.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: #444;
  cursor: pointer;
}

.checkbox-item input {
  accent-color: #97446d;
}

.checkbox-item small {
  color: #888;
  font-size: 0.8rem;
}

/* ===== Scroll zones ===== */
.scroll {
  max-height: 200px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.scroll::-webkit-scrollbar {
  width: 6px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

/* ===== Price ===== */
.price-slider input[type="range"] {
  width: 100%;
  height: 5px;
  border-radius: 10px;
  background: #e5e5e5;
  appearance: none;
}

.price-slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #97446d;
  cursor: pointer;
}

.price-display {
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 0.85rem;
  color: #333;
}

/* ===== Select ===== */
select {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
  background: #fafafa;
}

select:focus {
  outline: none;
  border-color: #97446d;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .filter-container {
    padding: 1.5rem;
    margin: 1rem;
  }
}
</style>
