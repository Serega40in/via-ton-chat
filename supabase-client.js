// supabase-client.js
const SUPABASE_URL = 'https://vwarulougzcsohoybxmv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3YXJ1bG91Z3pjc29ob3lieG12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NjY0MzMsImV4cCI6MjA5NDI0MjQzM30.tP-qdcfAruG2zA41FXkqM8fRGCi23Yjm8neQNidB2s0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function getTelegramUser() {
  if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
    return window.Telegram.WebApp.initDataUnsafe.user;
  }
  return null;
}
