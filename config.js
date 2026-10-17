/* =====================================================================
 *  TPA LINE  共通設定
 *  ここだけ書き換えれば両画面（柔軟性チェック／練習負荷記録）が動きます。
 * ===================================================================== */
window.TPA_CONFIG = {
  // Supabase Edge Function のURL
  // 例: https://lzlizdcrgarojpmrdbrj.supabase.co/functions/v1/tpa
  // 2026-10：Supabase から Cloudflare（tpa-official）に移した
  API_URL: "https://tpa-official.s-hanawa.workers.dev",

  // TPAチャレンジ（みんなで目指す協力型）の Edge Function。既存の tpa とは別の関数
  CHALLENGE_API_URL: "https://tpa-official.s-hanawa.workers.dev",

  // Supabase の anon キー（Edge Function 呼び出しの Authorization に使用）
  ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bGl6ZGNyZ2Fyb2pwbXJkYnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc5ODk4MDUsImV4cCI6MjEwMzU2NTgwNX0.81Sx8pwCx6SVG-f9xxZqM0MWa1EVHDQKPV85_jeOHsE",

  // LIFF ID（LINE Developers で発行）
  LIFF_ID_FLEX: "2011338197-1F0HFQNB",
  LIFF_ID_LOAD: "2011338197-XfqVMVSA",
};
