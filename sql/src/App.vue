<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Log In</RouterLink> |
      <RouterLink to="/signup">Sign Up</RouterLink> |
      <RouterLink to="/create"> Create Order</RouterLink> |
      <RouterLink to="/cart">Confirm Order</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
body{
  background-color:rgb(255, 255, 255)
}
h1{
  font: 30px;
  text-align: center;
  font-weight: 600;
}
 h2, h3{
  color:black;
  text-align: center;
  text-align: center;
  padding: 10px;
  margin:10px
}
.nav {
  color: rgb(0, 0, 0);
  font-size: 1rem;
  text-align: center;
  border-radius: 30px;
  background-color: rgb(202, 141, 193);
  padding: 10px;
  margin:10px;
  border-color: black;
  align-items: center;
}
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
  align-items: center;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style> */
