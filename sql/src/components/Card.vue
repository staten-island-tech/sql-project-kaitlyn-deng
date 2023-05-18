<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <h2>{{ calories }}</h2>
    <h3>{{ protein }}</h3>
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
