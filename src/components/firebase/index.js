import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXWt8bg8mVOnQzkGyNGIjjiHVj_WJuovc",
    authDomain: "todo-app-2-5d943.firebaseapp.com",
    projectId: "todo-app-2-5d943",
    storageBucket: "todo-app-2-5d943.appspot.com",
    messagingSenderId: "887845644858",
    appId: "1:887845644858:web:7c51e7a17d0153cbd56303"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, app as firebase }; // exporting `app` as `firebase`
