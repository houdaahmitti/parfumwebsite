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
