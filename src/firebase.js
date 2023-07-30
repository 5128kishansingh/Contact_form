import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";


function StartFirebase() {
const firebaseConfig = {
    apiKey: "AIzaSyAt6vukdaN0X1UGedFuRRdwLypiHR6zUTw",
    authDomain: "contact-form-49557.firebaseapp.com",
    projectId: "contact-form-49557",
    storageBucket: "contact-form-49557.appspot.com",
    messagingSenderId: "239943222931",
    appId: "1:239943222931:web:2e2d36eeb9955837faef66"
  };
    const app=initializeApp(firebaseConfig);
    return getDatabase(app)

 } 
 export default StartFirebase;