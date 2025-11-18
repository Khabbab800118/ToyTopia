import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth, AuthContext, googleProvider } from '../provider/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleGoogleBtn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must have uppercase, lowercase, and be 6+ characters");
            return;
        } else {
            setError("")
        }
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
                            <small className='text-center mt-5 text-red-800'>{error ? error : ""}</small>
                            <small className='text-center mt-5'>Already have an account? <Link className='text-blue-800' to={"/auth/login"}>Log In</Link></small>
                        </fieldset>
                    </form>
                    <div className='flex items-center justify-center'>
                        <button onClick={handleGoogleBtn} className='btn btn-secondary px-5 py-1'> <FaGoogle className='text-2xl'></FaGoogle> <span className=' text-primary'>Log In With Google</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;