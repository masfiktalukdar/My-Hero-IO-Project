import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const handleSocialLogin = (providerFn) => {
        providerFn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 flex justify-center items-center">
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
                <div className="text-center lg:text-left w-full lg:w-1/2 p-4">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Access your favorite apps/games and manage your installations.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center mt-2'>New here? <Link to="/register" className='text-primary font-bold'>Create an account</Link></p>
                    </form>
                    <div className="divider px-8">OR</div>
                    <div className="p-4 pt-0 w-full flex flex-col gap-2">
                        <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline btn-info w-full"><FaGoogle className='mr-2' /> Login with Google</button>
                        <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-outline w-full"><FaGithub className='mr-2' /> Login with Github</button>
                        <button onClick={() => handleSocialLogin(facebookLogin)} className="btn btn-outline btn-primary w-full"><FaFacebook className='mr-2' /> Login with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
