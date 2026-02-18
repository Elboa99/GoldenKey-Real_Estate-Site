/**
 * Golden Key — Firebase Configuration
 * 
 * ISTRUZIONI:
 * 1. Copia questo file come "firebase-config.js" (senza .example)
 * 2. Vai su https://console.firebase.google.com/
 * 3. Crea un nuovo progetto (o seleziona uno esistente)
 * 4. Vai su "Impostazioni Progetto" > "Le tue app" > Aggiungi app Web
 * 5. Copia i valori del tuo firebaseConfig qui sotto
 * 6. Attiva Firestore Database dalla console Firebase
 * 
 * ⚠️ NON COMMITTARE firebase-config.js su Git! È già nel .gitignore.
 */

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.firebasestorage.app",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

/**
 * EmailJS Configuration
 * 
 * ISTRUZIONI:
 * 1. Vai su https://www.emailjs.com/ e crea un account
 * 2. Aggiungi un "Email Service" (es. Gmail del cliente)
 * 3. Crea un "Email Template" con le variabili: {{name}}, {{email}}, {{phone}}, {{message}}, {{source}}, {{date}}
 * 4. Copia i tuoi ID qui sotto
 */
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}
