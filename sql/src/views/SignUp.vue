<template>
  <div>
    <h1>Sign Up</h1>
    <div class="container">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="container">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <div class="container">
      <button @click="createAccount">Create Account</button>
      <RouterLink to="/">Log In</RouterLink>
      <!-- <button @click="login">Log In</button>
        <button @click="logout">Log Out</button> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

let email = ref('')
let password = ref('')

async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}
createAccount()
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
