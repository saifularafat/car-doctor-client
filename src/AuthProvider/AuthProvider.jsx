import { getAuth } from "firebase/auth";
import app from "../firebase/firebase";
import { createContext, useState } from "react";

export const AuthContext = createContext()
const auth = getAuth( app ) 

const AuthProvider = ({ children }) => {
    const [ user, setUser] = useState({'displayName': 'saiful'})

    const authinfo = {
        user
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;