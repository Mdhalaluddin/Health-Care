import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../Home/Footer/Footer";
import { Link, useLocation, useNavigate,  } from "react-router-dom";


const Login = () => {
    const [singError, setSingError] = useState('')

    const {  signIN } = useContext(AuthContext)
    const location = useLocation();
    console.log('location in te login', location);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIN(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setSingError(error.massage)
            })


    }
   
    return (
        <div>
            <h2 className="text-3xl text-center my-8 font-bold">Login Now</h2>
            <form onSubmit={handleLogin} className="card-body bg-slate-200 rounded-lg mb-5 lg:w-2/5 md:w-1/4 h-full mx-auto">
                <div className="form-control w-full">
                    <label className="label mt-4">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button  className="btn btn-primary">Login</button>
                </div>
                <p className="mt-2 text-center">Do not have an account? <Link className="text-green-400 font-bold" to="/register">Register</Link></p>
            </form>
            {
                singError && <p className="text-red-500 text-2xl">{singError}</p>
            }
            <Footer></Footer>
        </div>
    );

};

export default Login;