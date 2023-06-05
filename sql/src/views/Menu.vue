<template>
  <div class="container">
    <h1>Start an Order.</h1>
    <h2>Select your fruits.</h2>
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

// const { data, error } = await supabase
//   .from('orders')
//   .insert({ email: email.value, fruits: fruit.value, notes: notes.value })

onMounted(() => {
  getData()
})
</script>

<style scoped>
.container {
  font-size: 0.75rem;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100rem;
  align-items: center;
}
</style>
