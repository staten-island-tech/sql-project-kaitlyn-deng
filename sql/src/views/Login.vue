<template>
  <div class="container">
    <header>Log In</header>
    <!-- <Account v-if="session" :session="session" />
    <Auth v-else /> -->
    <div class="label">
      <label for="email">Email: </label>
    <input type="email" id="email" v-model="email">
    </div>
   

    <div class="label">
      <label for="username">Username: </label>
      <input type="username" id="username" v-model="username" />
    </div>
    <div class="label">
    <label for="password">Password: </label>
    <input type="password" id="password" v-model="password">
    </div>
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
body{
  background-color: white;
}
header{
font-size: 1.5rem;
}
.container {
  padding: 10px;
  margin: 10px;
  background-color: rgb(255, 255, 255);
  color: black;
  align-items: center;
  text-align: center;

}
button{
  border-radius: 30px;
  background-color: pink;
  color:black;
  margin: 10px;
  padding: 10px;
  align-items: center;
  text-align: center;
}
.label{
  padding: 10px;
  margin: 10px;
  text-align: center;
}
label{
  font-size: 1rem;
}

</style>
