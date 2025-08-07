import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// 1. Importe as funções de autenticação
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

// Lê as variáveis de ambiente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Inicializa o aplicativo Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Firestore
export const db = getFirestore(app);

// 2. Exporta a instância de Autenticação
export const auth = getAuth(app);

// 3. Lógica para garantir que o usuário esteja logado anonimamente
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Se não houver usuário logado, faz o login anônimo
    signInAnonymously(auth).catch((error) => {
      console.error("Erro no login anônimo:", error);
    });
  }
});