import Vue from 'vue'
import VueFire from 'vuefire'

Vue.use(VueFire);

import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyB3l5IfIOck2p4lCWLxHRKHjPizjXE5EcE",
    authDomain: "provider-search-service.firebaseapp.com",
    databaseURL: "https://provider-search-service.firebaseio.com",
    projectId: "provider-search-service",
    storageBucket: "provider-search-service.appspot.com",
    messagingSenderId: "623500132569"
};

let app = firebase.initializeApp(config);
const db = app.database();
let usersRef = db.ref('users');

export  {usersRef};