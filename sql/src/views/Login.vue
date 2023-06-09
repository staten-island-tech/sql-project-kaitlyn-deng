<template>
  <div class="container">
    <header>Log In</header>
    <!-- <Account v-if="session" :session="session" />
    <Auth v-else /> -->
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email">
    <br>
 
      <label for="username">Username:</label>
      <input type="username" id="username" v-model="username" />
  <br>
    <label for="email">Password:</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button @click="login">Log In</button>
    <p>Don't have an account?</p>
    <RouterLink to="/signup">Sign up here</RouterLink>
  </div>
</template>

<script setup>
import {ref } from 'vue'
// import Account from '../components/Account.vue'
// import Auth from '../components/Auth.vue'
import { supabase } from '../supabase'
import router from "../router/index"
import {useAuthStore} from '../stores/auth'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const username = ref('')

async function login(){
  const {data, error} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    options:{
      data:{
        username: username.value
      }
    }
  })
  const { data: { user } } = await supabase.auth.getSession();
authStore.loadUser(user);
if(error){
  console.log(error)
}else{
  console.log(data)
}
router.push({path: '/create'})
}
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
