import Lottie from 'lottie-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2
import loginLottieJSON from '../../assets/lottie/login.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../../shared/SocialLogin';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signInUser(email, password);
            console.log('Signed in:', result.user);

            // ✅ Show SweetAlert success message
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'Welcome back!',
                showConfirmButton: false,
                timer: 2000
            });

            // ⏩ Redirect to homepage after delay
            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            console.log(error);

            // ❌ Show SweetAlert error message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password!',
            });
        }
    };

    return (
        <div className="min-h-screen bg-base-200 p-4 flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-md p-10">
                    <h1 className="mt-4 text-2xl text-center font-bold text-white">Login Here</h1>
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
                        Dont have an account?{" "}
                        <Link to="/register" className="text-[#FF5103]">
                            Register
                        </Link>
                    </p>
                </div>
                <div className="w-full max-w-md">
        <Lottie animationData={loginLottieJSON} loop={true} />
      </div>
        </div>
    );
};

export default SignIn;
