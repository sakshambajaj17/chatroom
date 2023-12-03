//import firebase from 'firebase'
// import { firebase } from 'firebase';
//import firebase from 'firebase/app';
import 'firebase/firestore';
//import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//will use access data from firebase database

const firebaseAPP=firebase.initializeApp({
    apiKey: "AIzaSyDrT9w2i5niCaFQ8MOyYBtMo-2p84FqAgo",
    authDomain: "chatroom-3745a.firebaseapp.com",
    projectId: "chatroom-3745a",
    storageBucket: "chatroom-3745a.appspot.com",
    messagingSenderId: "405649544040",
    appId: "1:405649544040:web:abef94e38899bdcd8a7cdd",
    measurementId: "G-0E8QKXHS5T"
})
// from this we are getting 'firestore' 
const db = firebaseAPP.firestore()

const auth = firebase.auth()

export { db, auth }
// exporting so that i can use it any where w/o creating variable again


// //import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCXeejpowQDwkLb28t1VgDH5h0XT8D2KTg",
//     authDomain: "chatroom-d682f.firebaseapp.com",
//     projectId: "chatroom-d682f",
//     storageBucket: "chatroom-d682f.appspot.com",
//     messagingSenderId: "432659802331",
//     appId: "1:432659802331:web:ffe371d96834f6e36804fe",
//     measurementId: "G-JYDKCRHDE1"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

