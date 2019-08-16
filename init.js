// Your web app's Firebase configuration
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
apiKey: "AIzaSyAqO268tDrnBDB7g9NHIG7sdIrRWUMcXKw",
authDomain: "udemy-ninja-chat-700a2.firebaseapp.com",
databaseURL: "https://udemy-ninja-chat-700a2.firebaseio.com",
projectId: "udemy-ninja-chat-700a2",
storageBucket: "",
messagingSenderId: "41185289847",
appId: "1:41185289847:web:8ce6dfd259eb9fa1"
};
// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots:true });
export default firebaseApp.firestore();