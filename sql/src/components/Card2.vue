<template>
    <div class="card">
      <h1>Email: {{ email }}</h1>
      <h2>Fruit: {{ fruits }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Card',
    props: {
      email: String,
      fruit: Object
    },
    // methods: {
    //   remove() {
    //     const {error} = supabase.from('orders').delete().eq('email', 'fruit')
    //   }
    // },
    data() {
      return {
        count: 0
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .card {
    font-size: 10px;
    border-radius: 20px;
    text-align: center;
    color: black;
    align-items: center;
    padding: 10px;
    margin:10px;
    background-color:bisque;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  button{
    border-radius: 30px;
    padding: 10px;
    margin: 5px;
    background-color: pink;
  }
  </style>
  