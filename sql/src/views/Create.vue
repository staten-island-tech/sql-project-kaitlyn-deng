
 <template>
  <div class="container">
    <header>Start an Order</header>
    <h1>Select your fruits.</h1>

    <Card
      v-for="fruits in fruit"
      :key="fruits.name"
      :name="fruits.name"
      :calories="fruits.calories"
      :protein="fruits.protein"
    />

    <form class="form" @submit.prevent="handleSubmit">
      <p>Enter your email.</p>
      <label for="email"></label>
      <input type="email" id="email" v-model="email" required />
      <button @click="create">Create Order</button>
    </form>
  </div>
</template>

<script setup>
import { supabase } from '../supabase'
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const email = ref('')
const fruit = ref(['fruits'])

// const ordersStore = useOrdersStore
// const newOrder = ref('')
async function getData() {
  try {
    const { data } = await supabase.from('fruit').select('*')
    fruit.value = data
  } catch (error) {
    console.log(error)
  }
}

async function create() {
  const {data, error} = await supabase.from("orders").insert({
    email: email.value,
    fruit: fruit.value
  });
  if(error){
    console.log(error)
  }else{
    console.log(data)
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
header {
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-size: 1.5rem;
  color: black;
}
h1{
  font-size: 1rem;
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
.form {
  background-color: antiquewhite;
  color: rgb(0, 0, 0);
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  align-items: center;
}
button {
  border-radius: 30px;
  padding: 10px;
  margin: 10px;
  background-color: pink;
}
.box {
  background-color: antiquewhite;
  padding: 10px;
  margin: 10px;
  align-items: center;
  color: black;
  border-radius: 30px;
}
</style> 
