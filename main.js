// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Tgi9xKKhCAgw_-y9lFNvgMHjwO4Su7w",
  authDomain: "datatest-f646a.firebaseapp.com",
  projectId: "datatest-f646a",
  storageBucket: "datatest-f646a.appspot.com",
  messagingSenderId: "983202659916",
  appId: "1:983202659916:web:bed82cfd3c05cd81dcbee9",
  measurementId: "G-TQF09CHVSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function pegarInfo(){
    id = 0;
    var inputNome = document.querySelector("#name");
    var nome = inputNome.value;
    var inputSenha = document.querySelector("#senha");
    var senha = inputSenha.value;

    firebase.database().ref("Info").once("value").then (function(snap){
        id=snap.numChildren();
        id++;
        firebase.database().ref("Info").child(id.toString()).set({
            nome: nome,
            senha: senha,
            id: id
        })
    })
}