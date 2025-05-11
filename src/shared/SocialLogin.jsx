import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: `Welcome, ${result.user.displayName || 'User'}!`,
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Google sign-in failed. Please try again.',
        });
      });
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn bg-red-600 text-white">
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
