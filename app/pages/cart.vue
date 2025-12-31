<template>
  <section class="cart-page">
    <h1 class="page-title">Panier</h1>

    <!-- Steps -->
    <div class="steps">
      <span class="active">Panier</span>
      <span>Checkout</span>
      <span>Order complete</span>
    </div>

    <div class="cart-layout">
      <!-- LEFT : TABLE -->
      <table class="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Sous-total</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              <button class="remove" @click="remove(item.id)">×</button>
            </td>
            <td>
              <strong>{{ item.name }}</strong>
              <p class="desc">{{ item.description }}</p>
            </td>
            <td>{{ item.price }} د.م.</td>
            <td>
              <input
                type="number"
                min="1"
                v-model.number="item.quantity"
              />
            </td>
            <td>{{ item.price * item.quantity }} د.م.</td>
          </tr>
        </tbody>
      </table>

      <!-- ACTIONS -->
      <div class="cart-actions">
        <input
          type="text"
          v-model="promoCode"
          placeholder="Code promo"
        />
        <button @click="applyPromo">Appliquer le code promo</button>
        <button class="update">Mettre à jour le panier</button>
      </div>

      <!-- RIGHT : TOTAL -->
      <div class="cart-total">
        <h2>Total panier</h2>

        <div class="row">
          <span>Sous-total</span>
          <span>{{ subtotal }} د.م.</span>
        </div>

        <div class="row">
          <span>Expédition</span>
          <span>Forfait : {{ shipping }} DH</span>
        </div>

        <div class="row total">
          <span>Total</span>
          <span>{{ total }} DH</span>
        </div>

        <button class="checkout">
          Valider la commande
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartPage',

  data() {
    return {
      promoCode: '',
      shipping: 40,
      cart: [

      ]
    }
  },

  computed: {
    subtotal() {
      return this.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    },
    total() {
      return this.subtotal + this.shipping
    }
  },

  methods: {
    remove(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    },
    applyPromo() {
      if (this.promoCode === 'LOVE10') {
        this.shipping = 0
        alert('Code promo appliqué')
      } else {
        alert('Code promo invalide')
      }
    }
  }
}
</script>

<style scoped>
/* ======================
   GLOBAL
====================== */
.cart-page {
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
  font-family: 'Inter', sans-serif;
  background: #fafafa;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

/* ======================
   STEPS
====================== */
.steps {
  display: flex;
  gap: 25px;
  margin-bottom: 40px;
  font-size: 14px;
}

.steps span {
  position: relative;
  color: #aaa;
}

.steps span::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2b69a4;
  transition: 0.3s;
}

.steps .active {
  color: #000;
  font-weight: 600;
}

.steps .active::after {
  width: 100%;
}

/* ======================
   LAYOUT
====================== */
.cart-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* ======================
   TABLE
====================== */
.cart-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
}

.cart-table thead th {
  text-align: left;
  font-size: 14px;
  color: #888;
  font-weight: 500;
  padding: 10px;
}

.cart-table tbody tr {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.04);
}

.cart-table td {
  padding: 18px 15px;
  vertical-align: middle;
}

.cart-table tbody tr td:first-child {
  border-radius: 12px 0 0 12px;
}

.cart-table tbody tr td:last-child {
  border-radius: 0 12px 12px 0;
}

/* ======================
   REMOVE BTN
====================== */
.remove {
  background: #ffe6ee;
  color: #2b69a4;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
}

.remove:hover {
  background: #2b69a4;
  color: #fff;
}

/* ======================
   PRODUCT DESC
====================== */
.desc {
  font-size: 13px;
  color: #777;
  margin-top: 5px;
}

/* ======================
   QUANTITY
====================== */
input[type="number"] {
  width: 70px;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
  text-align: center;
}

/* ======================
   ACTIONS
====================== */
.cart-actions {
  display: flex;
  gap: 12px;
  margin-top: 25px;
}

.cart-actions input {
  flex: 1;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.cart-actions button {
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background: #0d2a81;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
}

.cart-actions button:hover {
  background: #2b69a4;
}

/* ======================
   TOTAL CARD
====================== */
.cart-total {
  background: #fff;
  padding: 28px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
}

.cart-total h2 {
  margin-bottom: 20px;
  font-size: 22px;
}

.cart-total .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 15px;
}

.cart-total .total {
  font-size: 20px;
  font-weight: 700;
  border-top: 1px solid #eee;
  padding-top: 15px;
}

/* ======================
   CHECKOUT BUTTON
====================== */
.checkout {
  width: 100%;
  padding: 14px;
  margin-top: 25px;
  background: linear-gradient(90deg, #171342, #472fdd);
  color: #fff;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.checkout:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(99, 76, 228, 0.4);
}

</style>
