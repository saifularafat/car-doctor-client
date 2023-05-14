import { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { socialLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handlerGoogle = () => {
        socialLogin(googleProvider)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Sing In Successfully..',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    const handleGithub = () => {
        socialLogin(githubProvider)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Sing In Successfully',
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className=' text-center mb-7'>
                <button
                    className='p-3 bg-slate-200 rounded-full'
                >
                    <FaFacebookF className='w-5 h-5' />
                </button>
                <button
                    onClick={handleGithub}
                    className='p-3 mx-4 bg-slate-200 rounded-full'
                >
                    <FaGithub className='w-5 h-5' />
                </button>
                <button
                    onClick={handlerGoogle}
                    className='p-3 bg-slate-200 rounded-full'
                >
                    <FaGoogle className='w-5 h-5' />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;