<template>
  <h1></h1>
  <div></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'
const options = ref('')
async function getData() {
  let res = await fetch('')
  let data = await res.json()
  options.value = await data
}
onMounted(() => {
  getData()
})
export default {}
</script>

<style scoped></style>
