<template>
  <div class="card">
    <h1>Fruit Name: {{ name }}</h1>
    <h2>Calories: {{ calories }}</h2>
    <h3>Protein: {{ protein }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    calories: Number,
    protein: Number
  }
}
</script>

<style scoped></style>
