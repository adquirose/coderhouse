import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMozCirQKLvF7si_B3OGWG7K-D6-KLSi4",
    authDomain: "e-commerce-coderhouse-7a953.firebaseapp.com",
    projectId: "e-commerce-coderhouse-7a953",
    storageBucket: "e-commerce-coderhouse-7a953.appspot.com",
    messagingSenderId: "618812364671",
    appId: "1:618812364671:web:0a16bb6a6501a5b7d16c4a"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}