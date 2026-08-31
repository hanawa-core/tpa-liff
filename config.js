/* =====================================================================
 *  TPA LINE  共通設定
 *  ここだけ書き換えれば両画面（柔軟性チェック／練習負荷記録）が動きます。
 * ===================================================================== */
window.TPA_CONFIG = {
  // Supabase Edge Function のURL
  // 例: https://lzlizdcrgarojpmrdbrj.supabase.co/functions/v1/tpa
  API_URL: "https://<YOUR-PROJECT-REF>.supabase.co/functions/v1/tpa",

  // Supabase の anon キー（Edge Function 呼び出しの Authorization に使用）
  ANON_KEY: "<YOUR-SUPABASE-ANON-KEY>",

  // LIFF ID（LINE Developers で発行）
  LIFF_ID_FLEX: "2011338197-1F0HFQNB",
  LIFF_ID_LOAD: "2011338197-XfqVMVSA",
};
