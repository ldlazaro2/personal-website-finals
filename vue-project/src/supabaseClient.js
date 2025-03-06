import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nyfcjxeebjzejsutbgub.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55ZmNqeGVlYmp6ZWpzdXRiZ3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MjI0MjUsImV4cCI6MjA1NjQ5ODQyNX0.OEkEIPw-AAtYwbp8BrZP-CfZNQ8WqZIwjVwunUwV1QE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
