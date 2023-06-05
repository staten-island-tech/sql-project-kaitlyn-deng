<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <!-- <img src="{{ imageurl }}"> -->
    <p>Calories: {{ calories }}</p>
    <p>Protein: {{ protein }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    // imageurl: String,
    calories: Number,
    protein: Number,
  }
}
</script>

<style scoped>
.card {
  border-radius: 30px;
  background-color: antiquewhite;
  width: 20rem;
  height: 6rem;
  padding: 5px;
  margin: 10px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
