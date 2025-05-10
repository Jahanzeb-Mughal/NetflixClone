import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyCOmOQpcc3gyKsE4B9M0bE-1oGYQDHrJ1U",
    authDomain: "netflixclone-caaf6.firebaseapp.com",
    projectId: "netflixclone-caaf6",
    storageBucket: "netflixclone-caaf6.firebasestorage.app",
    messagingSenderId: "836367327346",
    appId: "1:836367327346:web:0bb532a625b1d71276a2eb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" ")) 
    }
}

const logout = () => {
    signOut(auth)
}


export { auth, db, login, signup, logout }