<template>
  <div class="container">
    <header>See Orders</header>
    <Card2
      v-for="order in orders"
      :key="order.email"
      :email="order.email"
      :fruit="order.fruit"
    />
  </div>
</template>

<script setup>
import { supabase } from '../supabase'
import { ref, onMounted } from 'vue'
import Card2 from '../components/Card2.vue'

const email = ref('')
const fruit = ref('')
const orders = ref(['orders'])

async function getOrder() {
  try {
    const { data } = await supabase.from('orders').select('*')
    orders.value = data
  } catch (error) {
    console.log(error)
  }
}

async function remove(){
 const {error} = await supabase.from('orders').delete().eq('email', 'fruits');
 if (error){
  console.log(error)
 }
}
// async function addOrder() {
//   const {data, error} = await supabase.from("orders").insert({
//     email: email.value,
//     password: password.value
//   });
//   if(error){
//     console.log(error)
//   }else{
//     console.log(data)
//   }
//   }
// const { data, error } = await supabase
//   .from('orders')
//   .insert({ email: email.value, fruits: fruit.value, notes: notes.value })

onMounted(() => {
  getOrder()
  remove()
})

</script>

<style scoped>
body{
  background-color: white;
  
}
header {
  text-align: center;
  font-size: 1.5rem;
  color: rgb(0, 0, 0);
}
.container {
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  margin: 10px;
  background-color: white;
}
</style>
