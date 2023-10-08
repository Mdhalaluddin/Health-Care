import { Link, useNavigate,  } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password,);

        setSuccess('');
        setRegisterError('');

        if(password.length<6){
            if(setRegisterError){
                swal(' password should be at least 6 characters or longer')
            }
            return;
        }
        else if(!/[A-Z]/.test(password)){
           if(setRegisterError)
            {
                swal("Your password must contain at least one upper case letter.");
            }
            return;
        }
        else if(!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
           if(setRegisterError){
            swal('Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]')
           }
            return;
        }
        
        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state: '/')
            if(setSuccess){
                
                swal('User Created Succesefully')
            }
        })
        .catch(error =>{
            console.log(error);
            if(email){
                if(setRegisterError){
                    swal('email already in use')
                }  
            }
        })
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-8 font-bold">Registration Please</h2>
            <form onSubmit={handleRegister} className="card-body bg-slate-200 rounded-lg mb-5 lg:w-2/5 md:w-1/4 h-full mx-auto">
                <div className="form-control w-full">
                    <label className="label mt-4">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className="mt-2 text-center">already have an account? <Link className="text-green-400 font-bold" to="/login">Login</Link></p>
            </form>
            {
                registerError && <p className="mx-auto text-2xl text-red-500  text-center">{registerError}</p>
            }
            {
                success &&  <p className="mx-auto text-2xl text-blue-500  text-center">{success}</p>
                
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Register;