import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, loader } = useContext(AuthContext)
    if (loader) {
        return <p>Loading.....</p>
    }

    const handlerRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.value;
        console.log(name, email, password, checkbox);
        // if (password > 8) {
        //    return Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Places 8 Character!',
        //     })
        // }

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Wow Your New Account Create ..',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center font-bold pt-8">Sign Up</h1>
                    <form onSubmit={handlerRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Your Name"
                                    required
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="password" className="input input-bordered" />
                                <label className=" my-2">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        required
                                        id="" className='mr-3' />
                                    <Link to='/terms' className=''>
                                        <span>Terms & Condition</span>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="main_btn" />
                            </div>
                            <p className='text-center my-7'>Or Sign In with</p>
                            <div className=' text-center mb-7'>
                                <p className='inline-flex'>
                                    <span
                                        className='p-3 bg-slate-200 rounded-full'>
                                        <FaFacebookF className='w-5 h-5' />
                                    </span>
                                    <span
                                        className='p-3 mx-4 bg-slate-200 rounded-full'>
                                        <FaLinkedinIn className='w-5 h-5' />
                                    </span>
                                    <span
                                        className='p-3 bg-slate-200 rounded-full'>
                                        <FaGoogle className='w-5 h-5' />
                                    </span>
                                </p>

                                <p> {FaEyeSlash}
                                    {FaRegEyeSlash}</p>
                            </div>
                            <p className='text-center text-description-color text-lg font-inter'>Already have an account?
                                <Link to='/login'>
                                    <span className='text-color-btn  font-semibold hover:underline'> Login
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Register;