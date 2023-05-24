<template>
  <div class="card">
    <h1>Fruit Name: {{ name }}</h1>
    <h2>Calories: {{ calories }}</h2>
    <h3>Protein: {{ protein }}</h3>
  </div>
</template>

<script>
const supabaseUrl = 'https://ntqenbxyupsazuqcufkq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function select() {
  const { data, error } = await supabase.from('fruit').select('name', 'calories', 'protein')
}

export default {
  props: {
    name: String,
    calories: Number,
    protein: Number
  }
}
</script>

<style scoped></style>
