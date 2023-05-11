import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
const auth = getAuth( app ) 

const AuthProvider = ({ children }) => {
    const [ user, setUser] = useState({'displayName': 'saiful'})
    const [ loader, setLoader ] = useState( true );

    const createUser = ( email, password ) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = ( email, password ) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader( true )
        return signOut(auth)
    } 

    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        });
        return () => {
          return unsubscribe();  
        }
    },[])

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;