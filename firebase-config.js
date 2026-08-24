// KAMAPIRO · Firebase configuration
// Se mantienen dos claves del mismo proyecto para que el acceso pueda recuperarse
// automáticamente mientras termina la rotación de credenciales.
const KAMAPIRO_BASE_CONFIG = {
  authDomain: "kamapiro.firebaseapp.com",
  projectId: "kamapiro",
  storageBucket: "kamapiro.firebasestorage.app",
  messagingSenderId: "399407290370",
  appId: "1:399407290370:web:99d9fd3d408a94551af1b"
};

const KAMAPIRO_API_KEYS = [
  "AIzaSyBkvX5d3UKIYMFBzYXE1pakplLghOpdrbw",
  "AIzaSyBv7BJ9Rf1ar2Bb760vGX65gj-kNy1_xQU"
];

window.KAMAPIRO_FIREBASE_CONFIG = {
  ...KAMAPIRO_BASE_CONFIG,
  apiKey: KAMAPIRO_API_KEYS[0]
};

window.KAMAPIRO_FIREBASE_CONFIGS = KAMAPIRO_API_KEYS.map(apiKey => ({
  ...KAMAPIRO_BASE_CONFIG,
  apiKey
}));
