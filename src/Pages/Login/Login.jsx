import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../Home/Footer/Footer";


const Login = () => {
    const { googleSignIn } = useContext(AuthContext)
    console.log(googleSignIn);
    const handleEmailSignInBtn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-8 font-bold">Login Now</h2>
            <div className="hero  mx-auto">
                {/* <div className="hero-content flex-col  mt-5 lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        
                    </div>
                </div> */}
                <form className="card-body bg-slate-200 rounded-lg mb-5 w-1/4 h-full">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleEmailSignInBtn} className="btn btn-primary">Login</button>
                            </div>
                        </form>
            </div>
            <Footer></Footer>
        </div>
    );
    
};

export default Login;