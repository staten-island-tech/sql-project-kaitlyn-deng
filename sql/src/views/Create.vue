<template>
  <div class="container">
    <header>Start an Order</header>
    <h1>Select your fruits.</h1>

    <Card
      v-for="fruits in fruit"
      :key="fruits.name"
      :name="fruits.name"
      :calories="fruits.calories"
      :protein="fruits.protein"
    />

    <form class="form">
      <p>Enter your email.</p>
      <label for="email"></label>
      <input type="email" id="email" v-model="email" required />

      <p>Optional: Include notes for your order.</p>
      <label for="notes"></label>
      <input type="notes" id="notes" v-model="notes" />
      <button @click="create">Create Order</button>
    </form>
  </div>
</template>

<script setup>
import { supabase } from '../supabase'
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'
const email = ref('')
const orders = ref([])
const fruit = ref(['fruits'])
const notes = ref('')

async function getData() {
  try {
    const { data } = await supabase.from('fruit').select('*')
    fruit.value = data
  } catch (error) {
    console.log(error)
  }
}

async function create() {
  orders.value.push({
    email: '',
    notes: ''
  })
}
// const { data, error } = await supabase
//   .from('orders')
//   .insert({ email: email.value, fruits: fruit.value, notes: notes.value })

onMounted(() => {
  getData()
  create()
})
</script>

<style scoped>
header {
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
}
.container {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  margin: 10px;
}
.form {
  background-color: antiquewhite;
  color: black;
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  align-items: center;
}
button {
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
}
.box {
  background-color: antiquewhite;
  padding: 10px;
  margin: 10px;
  align-items: center;
  color: black;
  border-radius: 30px;
}
</style>
