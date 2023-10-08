import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>

        {
            user && <>
                <li><NavLink to="/contact">Contact</NavLink></li>  
                <li><NavLink to="/services">Services</NavLink></li>  
            </>
        }

    </>
    return (
        <nav className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/X2xGwSB/logo12.jpg" alt="" className="h-8 w-10" />
                        <a className="md:text-2xl font-bold">Health Care</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user &&
                        <img src={user.photoURL} alt="" className="rounded-full w-10" />
                    }
                    {
                        user &&
                        <p className="mx-3 text-sm">{user.displayName}</p>

                    }
                    {
                        user ?
                            <a onClick={handleSignOut} className="btn btn-sm">Sign Out</a>
                            :
                            <Link to={'/login'}>
                                <a className="btn btn-sm">Login</a>
                            </Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;