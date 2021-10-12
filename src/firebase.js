import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCRJQkGukx27MImw-tMX4yEFvkdSnmCJd4',
	authDomain: 'disney-clone-c6bf3.firebaseapp.com',
	projectId: 'disney-clone-c6bf3',
	storageBucket: 'disney-clone-c6bf3.appspot.com',
	messagingSenderId: '757309984324',
	appId: '1:757309984324:web:3764a159d51a714854f611',
	measurementId: 'G-R5YVQ2K20W',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
