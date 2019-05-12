import firebase from "firebase";
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyB_bM7gzzn4bAlqn_EhFIeBLvfqk_h8kJQ",
  authDomain: "blog-kirby.firebaseapp.com",
  databaseURL: "https://blog-kirby.firebaseio.com",
  projectId: "blog-kirby",
  storageBucket: "blog-kirby.appspot.com",
  messagingSenderId: "163836407834"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
