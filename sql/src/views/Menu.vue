<template>
  <div class="container">
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
import { supabase } from '../supabase'
import { ref, onMounted } from 'vue'

// const supabaseUrl = 'https://ntqenbxyupsazuqcufkq.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)
import Card from '../components/Card.vue'

const fruit = ref(['fruit'])
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

<style scoped>
.container {
  font-size: 0.75rem;
  text-align: center;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>
