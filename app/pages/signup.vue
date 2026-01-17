<template>
  <section class="auth-wrapper">
    <div class="auth-card">
      <h1 class="title">Créer un compte</h1>
      <p class="subtitle">Rejoignez Love Parfum</p>

      <form @submit.prevent="register">
        <div class="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            v-model.trim="form.name"
            placeholder="Votre nom complet"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model.trim="form.email"
            placeholder="exemple@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            v-model.trim="form.password"
            placeholder="••••••••"
            required
          />
        </div>

        <div class="form-group">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            v-model.trim="form.confirmPassword"
            placeholder="••••••••"
            required
          />
        </div>

        <button :disabled="loading">
          {{ loading ? 'Création du compte...' : 'S’inscrire' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>

        <p class="switch">
          Vous avez déjà un compte ?
          <NuxtLink to="/login">Se connecter</NuxtLink>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignupPage',

  data() {
    return {
      loading: false,
      error: '',
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },

  head() {
    return {
      title: 'Sign Up | Love Parfum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Create your Love Parfum account'
        }
      ]
    }
  },

  methods: {
    async register() {
      this.error = ''

      if (this.form.password !== this.form.confirmPassword) {
        this.error = 'Passwords do not match'
        return
      }

      this.loading = true

      try {
        // 🔁 API signup (بدلها بالbackend ديالك)
        await new Promise(resolve => setTimeout(resolve, 1500))

        // success ➜ مشي للـ login
        this.$router.push('/login')
      } catch (e) {
        this.error = 'Something went wrong'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.title {
  font-size: 26px;
  font-weight: 600;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #777;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 18px;
}

label {
  font-size: 14px;
  color: #444;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

input:focus {
  outline: none;
  border-color: #5348e1;
}

button {
  width: 100%;
  padding: 12px;
  background: #0a056d;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

button:disabled {
  opacity: 0.7;
}

.error {
  margin-top: 12px;
  color: #952215;
  text-align: center;
}

.switch {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
}

.switch a {
  color: #5348e1;
  font-weight: 600;
}
</style>
