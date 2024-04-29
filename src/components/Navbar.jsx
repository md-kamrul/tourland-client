import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navBar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all_spot">All Spot</NavLink></li>
        {
            user ?
                <li><NavLink to="/add_list">Add List</NavLink></li>
                :
                <span></span>
        }
        {
            user ?
                <li><NavLink to="/my_list">My List</NavLink></li>
                :
                <span></span>
        }
        {
            user ?
                <li><Link onClick={handleSignOut}>LogOut</Link></li>
                :
                <li><NavLink to="/login">LogIn</NavLink></li>
        }
        {
            user ?
                <li><NavLink to="/profile">

                    {
                        user.photoURL ?
                            <img className="w-[38px] rounded-full" src={`${user.photoURL}`} alt="" data-tooltip-id="my-tooltip-inline" data-tooltip-content={`${user.displayName}`} />
                            :
                            <CgProfile className="text-3xl" data-tooltip-id="my-tooltip-inline" data-tooltip-content={`${user.displayName}`} />
                    }

                    {/* <CgProfile className="text-3xl" data-tooltip-id="my-tooltip-inline" data-tooltip-content={`${user.displayName}`} /> */}

                </NavLink></li>
                :
                <li><NavLink to="/register">Register</NavLink></li>
        }
    </>

    return (
        <div className="pt-5">
            <div className="navbar bg-[#4d95a7] border border-[#4d95a7] text-[#f8fbff] rounded-lg w-[90%] md:w-[80%] mx-auto bg-opacity-50 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#4d95a7] border border-[#4d95a7] rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl bg-transparent hover:bg-transparent">
                        <Link to="/">TourLand</Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle" data-tooltip-id="my-tooltip-inline" data-tooltip-content="Mode" checked />
                            <Tooltip
                                id="my-tooltip-inline"
                                style={{ backgroundColor: "#000e25", color: "#f8fbff" }}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;