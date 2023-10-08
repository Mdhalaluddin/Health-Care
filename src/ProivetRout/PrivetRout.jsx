import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRout = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    
    if(loading){
        return <div className="container mx-auto mt-10">
            <span className="loading loading-spinner text-secondary"></span>
        </div>
    }
    if(user){
       
        return children;
    }
    
    return <Navigate state={loading.pathname} to="/login"></Navigate>
};
PrivetRout.propTypes ={
    children: PropTypes.node
}
export default PrivetRout;