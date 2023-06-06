<template>
  <header>Finalize your order</header>
  <div class="confirm">
    <ol v-for="item in cart" :key="item" :item="item">
      {{
        item.name
      }}
    </ol>
  </div>
</template>

<script>
import { cart } from '../views/cart.js'
// let { data, error } = await supabase.from('orders').select(`
//    *,
//     fruit (
//       *
//     )
//   `)

export default {
  name: 'confirm',

  data() {
    return {
      cart: cart.cart,
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
  font-size: 1.5rem;
  color: white;
}
.confirm,
ul {
  color: white;
  margin: 10px;
  padding: 10px;
  text-align: center;
}
</style>
