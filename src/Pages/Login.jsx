import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const { login, setUser } = use(AuthContext);

    const handleLoginBtn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                alert("Log in successful")
            })
            .catch(error => {
                console.log(error.messege);
            })


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLoginBtn} className="card-body">
                        <fieldset className="fieldset">
                            {/* Email */}
                            <label className="label">Email</label>
                            <input required name='email' type="email" className="input" placeholder="Email" />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input required name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <small className='text-center mt-5'>Don't have an account? <Link className='text-red-600' to={"/auth/register"}>Register</Link></small>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;