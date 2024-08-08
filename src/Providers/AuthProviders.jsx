import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
	const [user,setUser] = useState(null);
	const [loading,setLoading] = useState(true);

	const createUser = (email,password) => {
	    return createUserWithEmailAndPassword(auth,email,password);    // https://firebase.google.com/docs/auth/web/start
	    setLoading(true);
	}

	const signIn = (email,password) => {
		return signInWithEmailAndPassword(auth,email,password);  // docs: password authentication
	    setLoading(true);
	}

	const logOut = () => {   
		return signOut(auth);  // doc: password authentication
		setLoading(true);
	}

	useEffect( () =>{   // onAuthStateChanged means the state whether user logged in or logged out
		const unSubscribe = onAuthStateChanged(auth,currentuser =>{   // firebase doc: manage user
			console.log('user in the auth state changed',currentuser);  
			setUser(currentuser);
			setLoading(false);
		});
		return ()=>{
			unSubscribe();
		}
	},[])

	const authInfo = {
		user,
		loading,
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