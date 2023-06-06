<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <p>Calories: {{ calories }}</p>
    <p>Protein: {{ protein }}</p>
    <button @click="selectedFruit()">Add to Order</button>
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
    selectedFruit() {
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
body {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.card {
  font-size: 10px;
  border-radius: 20px;
  text-align: center;
  color: black;
  align-items: center;
  padding: 10px;
  margin:10px;
  background-color:bisque;
  display: flex;
  flex-direction: column;
  text-align: center;
}
button{
  border-radius: 30px;
  padding: 10px;
  margin: 5px;
}
</style>
