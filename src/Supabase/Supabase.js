import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lohbbkwtdhbiiwbvveel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvaGJia3d0ZGhiaWl3YnZ2ZWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1Nzc2MDQsImV4cCI6MjA2MTE1MzYwNH0.tJoVbKMGq80Zp5CGd8nuDKLM2TsgzlmHOxsVh5AiWsI";
export const supabase = createClient(supabaseUrl, supabaseKey);
