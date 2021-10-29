import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBBiz_hKSUHr21ak17q6zdyglk0LnREN1A',
	authDomain: 'disney-plus-clone-bd99a.firebaseapp.com',
	projectId: 'disney-plus-clone-bd99a',
	storageBucket: 'disney-plus-clone-bd99a.appspot.com',
	messagingSenderId: '488267288636',
	appId: '1:488267288636:web:c7470d529b0ba093beb339',
	measurementId: 'G-T1N9FTT75J',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
