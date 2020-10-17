import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCj86dWXWEWsdCFD7Av9ydDw7wmZXSkGAY',
  authDomain: 'surveyapp-17e11.firebaseapp.com',
  databaseURL: 'https://surveyapp-17e11.firebaseio.com',
  projectId: 'surveyapp-17e11',
  storageBucket: 'surveyapp-17e11.appspot.com',
  messagingSenderId: '264774664606',
  appId: '1:264774664606:web:852d0ddaa1e6b821d1d68f',
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
