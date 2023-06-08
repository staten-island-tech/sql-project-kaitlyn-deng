<template>
  <div class="confirm">
    <header>Finalize your order</header>
    <ul v-for="item in cart" :key="item" :item="item">
      {{
        item.name
      }}
    </ul>
  </div>
</template>

<script>
import { cart } from '../views/cart.js'
import { supabase } from '../supabase'

let { data, error } = await supabase.from('orders').select(`
    email,
    profiles (
      *
    )
  `)

export default {
  name: 'confirm',

  data() {
    return {
      cart: cart.cart
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
  font-size: 1.5rem;
  color: black;
}
.confirm,
ul {
  color: black;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
</style>
