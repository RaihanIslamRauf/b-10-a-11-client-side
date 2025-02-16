import Lottie from 'lottie-react';
import { useContext } from 'react';
import loginLottieJSON from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../shared/SocialLogin';
import { Link } from 'react-router-dom';


const SignIn = () => {
    const { singInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log('sign in', result.user)
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottieJSON}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-4 text-4xl text-center font-bold text-white">Login Here</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 text-white">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="text-center font-semibold mb-2">
                      Dont`t have An Account?{" "}
                        <Link to="/register" className="text-[#FF5103]">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;