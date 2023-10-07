import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const emailSignIn = ()=>{
        console.log("email longIn");
    }

const AuthInfo ={
    emailSignIn,
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