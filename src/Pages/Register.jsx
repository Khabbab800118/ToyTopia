import React from 'react';

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="email" className="input" placeholder="Name" />
                            <label className="label">Photo URL</label>
                            <input type="email" className="input" placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <small>hello</small>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;