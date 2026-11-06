export default function handler(req, res) {
  // Allow browser cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Resolve API key from exact Vercel Environment Variable names
  const resolvedApiKey =
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
    process.env.FIREBASE_API_KEY ||
    process.env.API_KEY ||
    "";

  // Resolve Project ID from exact Vercel Environment Variable names
  const resolvedProjectId =
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
    process.env.FIREBASE_PROJECT_ID ||
    "tailor-keeper";

  res.status(200).json({
    apiKey: resolvedApiKey,
    authDomain: `${resolvedProjectId}.firebaseapp.com`,
    projectId: resolvedProjectId,
    storageBucket: `${resolvedProjectId}.firebasestorage.app`,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "791863119393",
    appId: process.env.FIREBASE_APP_ID || "1:791863119393:web:494c752e472e88dd671d60"
  });
}
