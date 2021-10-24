import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD86ksqY9dOVHoN0kH-j6iH61-vceV52cA",
  authDomain: "buzzerapp-16b98.firebaseapp.com",
  databaseURL: "https://buzzerapp-16b98-default-rtdb.firebaseio.com",
  projectId: "buzzerapp-16b98",
  storageBucket: "buzzerapp-16b98.appspot.com",
  messagingSenderId: "517791323642",
  appId: "1:517791323642:web:6bc2c7aa59859d728d4043"
};

   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();