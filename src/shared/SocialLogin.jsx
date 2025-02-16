import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn bg-red-600 text-white">
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
