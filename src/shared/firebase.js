import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLX8DUdJR4VhN6maK9TY1Lnfty2srpPcM',
  authDomain: 'hanghae-smiley.firebaseapp.com',
  projectId: 'hanghae-smiley',
  storageBucket: 'hanghae-smiley.appspot.com',
  messagingSenderId: '921493305018',
  appId: '1:921493305018:web:44d75bc4cbb9f37105b483',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;

export { auth, apiKey };
