import { createClient } from '@supabase/supabase-js';

// Отримуємо URL та ключ з наших змінних середовища з дефолтними значеннями для уникнення помилок під час збірки (build)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

// Створюємо та експортуємо єдиний екземпляр клієнта
export const supabase = createClient(supabaseUrl, supabaseKey);
