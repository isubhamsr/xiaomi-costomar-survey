import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyBcVr48DIBqsf3xHEU5VDpltsi16iSYTs4",
    authDomain: "xiaomi-customer-survey.firebaseapp.com",
    databaseURL: "https://xiaomi-customer-survey.firebaseio.com",
    projectId: "xiaomi-customer-survey",
    storageBucket: "",
    messagingSenderId: "991480728539",
    appId: "1:991480728539:web:2283374749b30a70"
  };
  // Initialize Firebase
 var Firebase = firebase.initializeApp(firebaseConfig);
 export default Firebase;

