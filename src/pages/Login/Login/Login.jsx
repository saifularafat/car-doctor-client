import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { loader, signIn } = useContext(AuthContext)
    // console.log(user);

    if (loader) {
        return <p>Loading......</p>
    }
    const handlerLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged);

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Wow Your Sing In Successfully..',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center font-bold pt-8">Login</h1>
                    <form onSubmit={handlerLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    required
                                    placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="main_btn" />
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
                            </div>
                            <p className='text-center text-description-color text-lg font-inter'>Have an account?
                                <Link to='/signup'>
                                    <span className='text-color-btn  font-semibold hover:underline'> Sign Up
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

export default Login;