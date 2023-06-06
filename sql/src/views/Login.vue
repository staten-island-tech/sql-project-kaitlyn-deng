<template>
  <div class="container">
    <Account v-if="session" :session="session" />
    <Auth v-else />
    <p>Don't have an account?</p>
    <RouterLink to="/signup">Sign up here</RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Account from '../components/Account.vue'
import Auth from '../components/Auth.vue'
import { supabase } from '../supabase'
import { useAuthStore } from '../stores/auth'

const store = useAuthStore()
const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.container {
  padding: 50px 0 100px 0;
}
</style>
