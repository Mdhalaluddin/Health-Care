import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
   
     const googleSignIn = (value)=>{
        return signInWithPopup(auth, googleProvider)
    }

const AuthInfo ={
    googleSignIn,
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;