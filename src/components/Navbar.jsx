import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navBar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all_spot">All Spot</NavLink></li>
        <li><NavLink to="/add_list">Add List</NavLink></li>
        <li><NavLink to="/my_list">My List</NavLink></li>
        <li><NavLink to="/login">LogIn</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/profile"><CgProfile className="text-3xl" /></NavLink></li>
    </>

    return (
        <div className="pt-5">
            <div className="navbar bg-[#f8fbffb2] w-[80%] mx-auto rounded-lg border border-[#f8fbff] text-[#000e25]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control tooltip" data-tip="Mode">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;