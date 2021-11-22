/** @format */

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDIdj5trguz_ZeGqFTovmat4zUoXivI6r8',
	authDomain: 'tinder-clone-669ac.firebaseapp.com',
	databaseURL: 'https://tinder-clone-669ac.firebaseio.com',
	projectId: 'tinder-clone-669ac',
	storageBucket: 'tinder-clone-669ac.appspot.com',
	messagingSenderId: '827942318734',
	appId: '1:827942318734:web:f24fb516160a3c3a424fdf',
	measurementId: 'G-9N1G293TMM',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
