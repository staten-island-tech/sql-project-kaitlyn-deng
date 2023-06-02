import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ntqenbxyupsazuqcufkq.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50cWVuYnh5dXBzYXp1cWN1ZmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNTg2NzgsImV4cCI6MTk5OTczNDY3OH0.CERmEhC7RUwXqSgBBSxlh85mMhKekykDs04loeDZdyY'

export const supabase = createClient(supabaseUrl, supabaseKey)
