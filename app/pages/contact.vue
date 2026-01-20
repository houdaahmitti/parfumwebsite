<template>
  <div class="contact-container">
    <h1>Formulaire de Contact</h1>

    <form class="contact-box" @submit.prevent="handleSubmit">

      <!-- Nom & Prénom -->
      <div class="mb-3">
        <label class="form-label">Nom et Prénom :</label>
        <input
          type="text"
          class="form-control"
          v-model="form.nom"
          placeholder="Nom et Prénom"
          required
        />
      </div>

      <!-- Adresse -->
      <div class="mb-3">
        <label class="form-label">Adresse :</label>
        <input
          type="text"
          class="form-control"
          v-model="form.adresse"
          placeholder="Votre adresse"
          required
        />
      </div>

      <!-- Téléphone -->
      <div class="mb-3">
        <label class="form-label">N° Téléphone :</label>
        <input
          type="tel"
          class="form-control"
          v-model="form.telephone"
          placeholder="+212 6 XX XX XX XX"
          required
        />
      </div>

      <!-- Sujet -->
      <div class="mb-3">
        <label class="form-label">Sujet :</label>
        <select class="form-control" v-model="form.sujet" required>
          <option value="">Sélectionner l'objet de la demande</option>
          <option>Support</option>
          <option>Réclamation</option>
          <option>Demande d'information</option>
        </select>
      </div>

      <!-- Message -->
      <div class="mb-3">
        <label class="form-label">Message :</label>
        <textarea
          class="form-control"
          rows="4"
          v-model="form.message"
          placeholder="Votre message..."
          required
        ></textarea>
      </div>

      <!-- Checkbox -->
      <div class="check">
        <input type="checkbox" v-model="form.accept" id="accept" />
        <label for="accept">
          En cochant cette case, j’accepte de recevoir des informations.
        </label>
      </div>

      <!-- Bouton -->
      <button type="submit" class="btn-red" :disabled="loading">
        {{ loading ? "Envoi..." : "Envoyer" }}
      </button>

      <p v-if="success" class="success">{{ success }}</p>
      <p v-if="error" class="error">{{ error }}</p>

    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import api from "../services/api";

const loading = ref(false);
const success = ref("");
const error = ref("");

const form = reactive({
  nom: "",
  adresse: "",
  telephone: "",
  sujet: "",
  message: "",
  accept: false,
});

const handleSubmit = async () => {
  if (!form.accept) {
    error.value = "Vous devez accepter de recevoir des informations.";
    return;
  }

  loading.value = true;
  error.value = "";
  success.value = "";

  try {
    await api.post("/contact", form);
    success.value = "Votre message a été envoyé avec succès ✅";

    // reset
    form.nom = "";
    form.adresse = "";
    form.telephone = "";
    form.sujet = "";
    form.message = "";
    form.accept = false;

  } catch (err) {
    error.value = err.response?.data?.message || "Erreur lors de l'envoi";
  } finally {
    loading.value = false;
  }
};
</script>


<style>

/* ---- BACKGROUND ---- */
body {
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: Arial, sans-serif;
}

/* ---- CONTAINER ---- */
.contact-container {
  text-align: center;
  padding-top: 40px;
   margin-bottom: 80px;
   background: transparent;
}

/* ---- TITLE ---- */
.contact-container h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  background:  linear-gradient(135deg, #0c0e29, #1044a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  transition: transform 0.3s ease;
}

.contact-container h1:hover {
  transform: translateY(-5px);
}


/* ---- BOX ---- */
.contact-box {
  width: 480px;
  margin: auto;
  background: rgba(255, 255, 255, 0.65);
  padding: 28px;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
}

/* ---- LABELS ---- */
.contact-box label {
  font-weight: bold;
  text-align: left;
  display: block;
  margin-bottom: 5px;
}

/* ---- INPUTS ---- */
.contact-box input:focus,
.contact-box textarea:focus,
.contact-box select:focus {
  border-color: #210B5B;
  box-shadow: 0 0 8px rgba(33,11,91,0.3);
  outline: none;
  background: rgba(255,255,255,1);
}

/* ---- CHECKBOX ---- */
.check {
  text-align: left;
  margin-bottom: 20px;
}

/* ---- BUTTON ---- */
.btn-red {
  width: 100%;
  padding: 14px;
  background: #1e3b6e;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease, transform 0.2s ease;
}

.btn-red:hover {
  background: rgb(28, 45, 141);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(12,41,205,0.3);
}


</style>
