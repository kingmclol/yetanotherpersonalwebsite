import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://smcmradcaegdmqovagxx.supabase.co";
export const supabaseBucketUrl = `${supabaseUrl}/storage/v1/object/public`;
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY21yYWRjYWVnZG1xb3ZhZ3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNjI0OTQsImV4cCI6MjA3MTYzODQ5NH0.FxJ5OBqJhc9MEakhi29X1SVC3CVIIHhGcLRxrPTAZ5A";
export const supabase = createClient(supabaseUrl, SUPABASE_KEY);
