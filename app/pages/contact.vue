<template>
  <div class="contact-container">

    <h1>Formulaire de Contact</h1>

    <form class="contact-box">

      <!-- Nom & Prénom -->
      <div class="mb-3">
        <label for="nom" class="form-label">Nom et Prénom :</label>
        <input id="nom" type="text" class="form-control" placeholder="Nom et Prénom">
      </div>

      <!-- Adresse -->
      <div class="mb-3">
        <label for="adresse" class="form-label">Adresse :</label>
        <input id="adresse" type="text" class="form-control" placeholder="Votre adresse">
      </div>

      <!-- Téléphone -->
      <div class="mb-3">
        <label for="telephone" class="form-label">N° Téléphone :</label>
        <input id="telephone" type="tel" class="form-control" placeholder="+212 6 XX XX XX XX">
      </div>

      <!-- Sujet -->
      <div class="mb-3">
        <label for="sujet" class="form-label">Sujet :</label>
        <select id="sujet" class="form-control">
          <option>Sélectionner l'objet de la demande</option>
          <option>Support</option>
          <option>Réclamation</option>
          <option>Demande d'information</option>
        </select>
      </div>

      <!-- Message -->
      <div class="mb-3">
        <label for="message" class="form-label">Message :</label>
        <textarea id="message" class="form-control" rows="4" placeholder="Votre message..."></textarea>
      </div>

      <!-- Checkbox -->
      <div class="check">
        <input type="checkbox" id="accept">
        <label for="accept">
          En cochant cette case, j’accepte de recevoir des informations.
        </label>
      </div>

      <!-- Bouton -->
      <button type="submit" class="btn-red">
        Envoyer
      </button>

    </form>

  </div>
</template>

<script>
export default {
  name: "Contact",
  head() {
    return {
      title: "Contact Us",
      meta: [
        { hid: "description", name: "description", content: "Love Parfum - Contact Us" },
        { hid: "keywords", name: "keywords", content: "Vue, Nuxt, JavaScript, Contact Us" }
      ]
    };
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
  color: rgb(14, 5, 46);
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: 0 2px 6px rgba(0,0,0,0.4);
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
.contact-box input,
.contact-box textarea,
.contact-box select {
  width: 100%;
  padding: 10px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: rgba(255,255,255,0.9);
}

/* ---- CHECKBOX ---- */
.check {
  text-align: left;
  margin-bottom: 20px;
}

/* ---- BUTTON ---- */
.btn-red {
  width: 100%;
  padding: 12px;
  background: #1e3b6e;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-red:hover {
  background: rgb(12, 41, 205);
}

</style>
