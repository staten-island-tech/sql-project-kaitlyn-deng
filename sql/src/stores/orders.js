import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
   orders:[]
  }),
  actions: {
   create(){
    const {data, error} = supabase.from("orders").insert({
        email: email.value,
        fruit: fruit.value

   })
   if(error){
    console.log(error)
   }else{
    console.log(data)
   }
  },
  getters: {
    
  }
}})
