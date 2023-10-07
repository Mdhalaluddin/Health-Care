import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {emailSignIn}= useContext(AuthContext)
    console.log(emailSignIn);
    return (
        <div>
            <h2 className="text-3xl">Login Now</h2>
        </div>
    );
};

export default Login;