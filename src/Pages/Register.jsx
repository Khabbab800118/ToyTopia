import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    })
                setUser(user);
                navigate("/");
            })
            .catch(error => {
                console.log(error.messege);
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input required name='name' type="text" className="input" placeholder="Name" />
                            {/* Photo */}
                            <label className="label">Photo URL</label>
                            <input required name='photo' type="text" className="input" placeholder="Photo URL" />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input required name='email' type="email" className="input" placeholder="Email" />
                            {/* Password */}
                            <label className="label">Password</label>
                            <input required name='password' type="password" className="input" placeholder="Password" />
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <small className='text-center mt-5'>Already have an account? <Link className='text-blue-800' to={"/auth/login"}>Log In</Link></small>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;