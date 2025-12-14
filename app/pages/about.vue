<template>
    <div>
      <h1>About us</h1>
    </div>
</template>
<script>
    export default {
        name : 'about',
        head() {
        return {
        title: 'About Us',
        meta: [
            { hid: 'description', name: 'description', content: 'Love Parfum- About Us' },
            { hid: 'keywords', name: 'keywords', content: 'Vue, Nuxt, JavaScript, About Us' }
        ]
        }
    }
    }
</script>