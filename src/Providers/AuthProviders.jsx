import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
	const [user,setUser] = useState(null);
	const createUser = (email,password) => {
	    return createUserWithEmailAndPassword(auth,email,password);    // https://firebase.google.com/docs/auth/web/start
	}

	const signIn = (email,password) => {
		return signInWithEmailAndPassword(auth,email,password);  // docs: password authentication
	 }

	const logOut = () => {   
		return signOut(auth);  // doc: password authentication
	}

	useEffect( () =>{   // onAuthStateChanged means the state whether user logged in or logged out
		const unSubscribe = onAuthStateChanged(auth,currentuser =>{   // firebase doc: manage user
			console.log('user in the auth state changed',currentuser);  
			setUser(currentuser);
		});
		return ()=>{
			unSubscribe();
		}
	},[])

	const authInfo = {
		user,
		createUser,
		createUser,
		logOut,
		signIn
	}
	return (
		<AuthContext.Provider value={authInfo}>
              {children}
		</AuthContext.Provider>
	);
};

export default AuthProviders;