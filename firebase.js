import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyApmH7JiLc_4yj9VVADydk3VzqvupxYaoo",
  authDomain: "website-comments-7d10c.firebaseapp.com",
  databaseURL: "https://website-comments-7d10c.firebaseio.com",
  projectId: "website-comments-7d10c",
  storageBucket: "website-comments-7d10c.appspot.com",
  messagingSenderId: "263336228337",
  appId: "1:263336228337:web:4c06954f214ff52d5e8050"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase