<template>
  <div>
    <h1>Sign In or Create An Account</h1>
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://ntqenbxyupsazuqcufkq.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function select() {
  const { data, error } = await supabase.from('fruit').select('name', 'calories', 'protein')
}
</script>

<style scoped></style>
