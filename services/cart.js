import { ref, watch } from "vue";

const cart = ref([]);

if (process.client) {
  cart.value = JSON.parse(localStorage.getItem("cart")) || [];

  // 💾 Auto save
  watch(
    cart,
    (val) => {
      localStorage.setItem("cart", JSON.stringify(val));
    },
    { deep: true }
  );
}

// ajouter un produit
const addToCart = (product) => {
  const existing = cart.value.find((p) => p._id === product._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

// supprimer un produit
const removeFromCart = (id) => {
  cart.value = cart.value.filter((p) => p._id !== id);
};

// mettre à jour la quantité
const updateQuantity = (id, quantity) => {
  const item = cart.value.find((p) => p._id === id);
  if (item) item.quantity = quantity;
};

export { cart, addToCart, removeFromCart, updateQuantity };
