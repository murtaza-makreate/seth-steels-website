
// Supabase Configuration
// TODO: Replace these with your actual project credentials from Supabase Dashboard -> Settings -> API
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY';

// Initialize the Supabase client
// We use the CDN version loaded in the HTML via <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other modules if supported, or just attach to window
window.supabaseClient = supabase;
