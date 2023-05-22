<template>
  <div>
    <h1>Our Fruits</h1>
    <Card
      v-for="fruits in fruits"
      :key="fruits.name"
      :name="fruits.name"
      :calories="fruits.nutritions.calories"
      :protein="fruits.nutritions.protein"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'
const fruits = ref('')
async function getData() {
  let res = await fetch('https://www.fruityvice.com/api/fruit/all')
  let data = await res.json()
  fruits.value = data
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
