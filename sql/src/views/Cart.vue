<template>
  <div class="confirm">
    <header>Finalize your order.</header>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" />
    <ul v-for="item in cart" :key="item" :item="item">
      {{
        item.name
      }}
    </ul>
    <label for="notes">Notes:</label>
    <input type="notes" id="notes" v-model="notes" />
  </div>
</template>

<script>
import { cart } from '../views/cart.js'
let { data: orders, error } = await supabase.from('orders').select(`
    email,
    fruit (
      public.orders.email
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
}
.confirm,
ul {
  color: black;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
</style>
