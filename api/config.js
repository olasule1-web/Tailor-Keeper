export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    apiKey: process.env.FIREBASE_API_KEY || "",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "tailor-keeper.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "tailor-keeper",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "tailor-keeper.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "791863119393",
    appId: process.env.FIREBASE_APP_ID || "1:791863119393:web:494c752e472e88dd671d60"
  });
}
