import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBpvy_lekj3SeoqvXUnB23Qiae1NXdMgUA',
  authDomain: 'expensify-with-facebook-login.firebaseapp.com',
  databaseURL: 'https://expensify-with-facebook-login.firebaseio.com',
  projectId: 'expensify-with-facebook-login',
  storageBucket: 'expensify-with-facebook-login.appspot.com',
  messagingSenderId: '130313519404'
};

firebase.initializeApp(config);

const database = firebase.database();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { firebase, facebookAuthProvider, database as default };
