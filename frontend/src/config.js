import firebase from "firebase";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DB_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);;

const db = firebaseApp.database();

export default db;