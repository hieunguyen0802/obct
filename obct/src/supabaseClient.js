// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these with your own Supabase project details
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
