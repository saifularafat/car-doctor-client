import img from '../../../assets/images/login/login.svg'

const Login = () => {

    const handlerLogin = event => {
        event.preventDefault();
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
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="main_btn" />
                            </div>
                            <p className='text-center my-7'>Or Sign In with</p>
                            <div>
                                
                            </div>
                            <p className='text-center text-description-color text-lg font-inter'>Have an account?<span className='text-color-btn  font-semibold'> Sign In</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Login;