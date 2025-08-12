import { createClient } from '@supabase/supabase-js'


// Отримуємо URL та ключ з наших змінних середовища
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Створюємо та експортуємо єдиний екземпляр клієнта
export const supabase = createClient(supabaseUrl, supabaseKey)