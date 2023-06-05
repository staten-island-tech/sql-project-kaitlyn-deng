<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <p>Calories: {{ calories }}</p>
    <p>Protein: {{ protein }}</p>
    <button @click="add(), count++">Add to Order</button>
  </div>
</template>

<script>
import { cart } from '../views/cart'
export default {
  name: 'Card',
  props: {
    name: String,
    calories: Number,
    protein: Number
  },
  methods: {
    add() {
      cart.cart.push({
        name: this.name
      })
      console.log(cart.cart)
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 30px;
  background-color: antiquewhite;
  width: 20rem;
  height: 6rem;
  padding: 5px;
  margin: 10px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
