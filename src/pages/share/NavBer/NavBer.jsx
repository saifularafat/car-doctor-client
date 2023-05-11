import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import Swal from "sweetalert2";


const NavBer = () => {
    const { user, logOut } = useContext(AuthContext)

    const handlerSingOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Account Sign out Success..!',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                console.error(error)
            })
    }
    const NavItems = <>
        <ul className="flex">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='service'>Service</Link></li>
            <li><Link to='blog'>Blog</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
    </>
    return (
        <div className="navbar bg-slate-100 h-28 mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <span className="flex items-center">
                        <span title={user?.displayName}>
                            <img src={user?.displayImage} alt="" />
                            <FaUserAlt className="w-7 h-7" />
                        </span>
                        <button onClick={handlerSingOut}
                            className="mx-5 border border-orange-500 py-2 px-4 hover:bg-orange-400">Log Out</button>
                    </span>
                        : <span className="mr-5">
                            <FaUserAltSlash className="w-8 h-8" />
                        </span>
                }
                <Link to='login'>
                    <a className="header_btn">Appointment</a>
                </Link>
            </div>
        </div>
    );
};

export default NavBer;