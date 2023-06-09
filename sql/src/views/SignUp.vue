<template>
  <div>
    <h1>Sign Up</h1>
    <div class="container">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="container">
      <label for="username">Username:</label>
      <input type="username" id="username" v-model="username" />
    </div>
    <div class="container">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div class="container">
      <button @click="createAccount">Create Account</button>
      <p>Already have an account?</p>
      <RouterLink to="/">Log in here</RouterLink>
      <!-- <button @click="login">Log In</button>
        <button @click="logout">Log Out</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import router from "../router/index"

const email = ref('')
const password = ref('')
const username = ref('')

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options:{
      data:{
        username: username.value
      }
    }
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
  await supabase.from("profiles").insert({email: email.value, password: password.value})
if (error) {
    console.log(error)
  }
  router.push({path: '/'})
}
// async function login(){
//   const { data, error } = await supabase.auth.signInWithOtp({
//   email: email.value
// })
//    if (error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// }

// async function logout(){
//     const {error} = await supabase.auth.signOut()
//     if (error){
//         console.log(error)
//     }else{
//         console.log("You've been logged out.")
//     }
// }
</script>

<style scoped></style>
