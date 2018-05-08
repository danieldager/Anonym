import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyCmL4jlcrg1QRRuTV_RpFu3FKuDuynwv4Q",
    authDomain: "anonym-b6bd5.firebaseapp.com",
    databaseURL: "https://anonym-b6bd5.firebaseio.com",
    projectId: "anonym-b6bd5",
    storageBucket: "",
    messagingSenderId: "711522477789"
  };

firebase.initializeApp(config);

const auth = firebase.auth();

export default firebase;