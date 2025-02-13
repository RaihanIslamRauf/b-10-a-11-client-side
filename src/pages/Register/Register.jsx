import Lottie from "lottie-react";
import { useState } from "react";
import registerLottieData from "../../assets/lottie/register.json";

const Register = () => {

    const [error, setError] = useState({});

    const validatePassword = (password) => {
        const errors = [];
        if (!/[A-Z]/.test(password)) {
            errors.push("Password must have an uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            errors.push("Password must have a lowercase letter.");
        }
        if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }
        return errors;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        
        console.log("User Info:", { name, email, photoURL, password });

        // Password validation
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            setError({ ...error, password: passwordErrors.join(" ") });
            return;
        }

         
    };



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-4 text-4xl text-center font-bold text-white">Register Here</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        
                        {/* Name Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter profile photo URL"
                                name="photoURL"
                                className="input input-bordered"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Error Message */}


                        {/* Register Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
