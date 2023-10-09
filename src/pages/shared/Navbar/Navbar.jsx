import { Link, NavLink } from "react-router-dom";
import userInitialPhoto from '../../../assets/user.png'
import { useContext } from "react";
import { EventContext } from "../../../provider/UserProvider";


const Navbar = () => {

    const { user, logOut } = useContext(EventContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold hover:bg-orange-400 underline" : ""
            }>Home</NavLink></li>
        <li><NavLink to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold hover:bg-orange-400  underline" : ""
            }>Blog</NavLink></li>
        {
            user && <>
            <li><NavLink to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] hover:bg-orange-400 font-bold underline" : ""
            }>Gallery</NavLink></li>
        <li><NavLink to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] hover:bg-orange-400 font-bold underline" : ""
            }>About</NavLink></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-1 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-orange-400">Corporate Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <h3>{user.displayName}</h3>
                            <img className="w-10 h-10 rounded-full mr-2" src={user.photoURL} />
                            <button onClick={handleSignOut} className="btn btn-sm">Sign out</button>

                        </>
                        :
                        <Link to='/login'><button className="btn bg-orange-400">Login</button></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;