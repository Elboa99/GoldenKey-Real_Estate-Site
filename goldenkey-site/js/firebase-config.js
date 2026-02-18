/**
 * Golden Key — Firebase Configuration
 * 
 * ISTRUZIONI:
 * 1. Vai su https://console.firebase.google.com/
 * 2. Crea un nuovo progetto (o seleziona uno esistente)
 * 3. Vai su "Impostazioni Progetto" > "Le tue app" > Aggiungi app Web
 * 4. Copia i valori del tuo firebaseConfig qui sotto
 * 5. Attiva Firestore Database dalla console Firebase
 */

const firebaseConfig = {
    apiKey: "AIzaSyBZAzWviY8LDznBbVh9jHG1vWPwLjcaioY",
    authDomain: "goldenkey-c35e6.firebaseapp.com",
    projectId: "goldenkey-c35e6",
    storageBucket: "goldenkey-c35e6.firebasestorage.app",
    messagingSenderId: "471004663315",
    appId: "1:471004663315:web:0d61179f6df2a7ddab79e6",
    measurementId: "G-LK3S9JG5V8"
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

