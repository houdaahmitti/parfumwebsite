<template>
  <section class="auth-wrapper">
    <div class="auth-card">
      <h1 class="title">Welcome Back</h1>
      <p class="subtitle">Log in to your account</p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model.trim="form.email"
            placeholder="example@email.com"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model.trim="form.password"
            placeholder="••••••••"
            required
          />
        </div>

        <button :disabled="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccountPage',

  data() {
    return {
      loading: false,
      error: '',
      form: {
        email: '',
        password: ''
      }
    }
  },

  head() {
    return {
      title: 'Login | Love Parfum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login to your Love Parfum account'
        }
      ]
    }
  },

  methods: {
    async login() {
      this.error = ''
      this.loading = true

      try {
        // مثال ديال API (تبدلها بالباك اند ديالك)
        await new Promise(resolve => setTimeout(resolve, 1500))

        // success
        this.$router.push('/')
      } catch (err) {
        this.error = 'Invalid email or password'
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
  transition: 0.2s;
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
  cursor: not-allowed;
}

.error {
  margin-top: 12px;
  color: #952215;
  text-align: center;
}
</style>
