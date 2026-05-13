// supabase-client.js
const SUPABASE_URL = 'https://vwarulougzcsohoybxmv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_McRGklsHAddHiLKspw3G9w_JIfRKnX_';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function getTelegramUser() {
  if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
    return window.Telegram.WebApp.initDataUnsafe.user;
  }
  return null;
}