// Supabase client — optional in v0.3.
// When VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are set, coach accounts
// and saved progress switch on. Until then the app runs in local mode.

import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && anon ? createClient(url, anon) : null;
