<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <img src="{{ imageurl }}"></img>
    <p>Calories: {{ calories }}</p>
    <p>Protein: {{ protein }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageurl: String,
    calories: Number,
    protein: Number,
  }
}
</script>

<style scoped>
.card {
  border-radius: 30px;
  background-color: antiquewhite;
  width: 30rem;
  height: 6rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
}
</style>
