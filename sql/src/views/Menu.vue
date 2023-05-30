<template>
  <div>
    <h1>Our Fruits</h1>
    <Card
      v-for="fruits in fruit"
      :key="fruits.name"
      :name="fruits.name"
      :calories="fruits.calories"
      :protein="fruits.protein"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import Card from '../components/Card.vue'
const supabaseUrl = 'https://ntqenbxyupsazuqcufkq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const fruit = ref('')
async function getData() {
  try {
    const { data } = await supabase.from('fruit').select('*')
    fruit.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
