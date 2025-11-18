import React, { use } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Header = () => {

    const { user, logOut } = use(AuthContext);

    const navigator = useNavigate();
    const handleLoginBtn = () => {
        navigator("/auth/login");
    }
    const handleRegisterBtn = () => {
        navigator("/auth/register");
    }
    const handleProfile = () => {
        navigator("/profile");
    }

    const handleLogoutBtn = () => {
        logOut()
            .then(() => {
                navigator("/");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-primary lg:px-10 lg:py-5 text-base-100">
            <div className="navbar-start w-1/3">
                <h1 className="text-2xl font-semibold">ToyTopia</h1>
            </div>
            <div>
                <NavLink className='w-1/3 flex flex-col items-center justify-center w-fit' to="/">
                    <FaHome></FaHome>
                    <span>Home</span>
                </NavLink>
            </div>
            <div className="navbar-end">
                {user ?
                    <div className='flex lg:flex-row flex-col gap-2'>
                        <button className='bg-secondary px-8 py-1 rounded-2xl text-accent font-semibold' onClick={handleProfile}> My Profile </button>
                        <button onClick={handleLogoutBtn} className='bg-secondary px-8 py-1 rounded-2xl text-accent font-semibold'>Log Out</button>
                    </div> :
                    <div className='flex lg:flex-row flex-col gap-2'>
                        <button onClick={handleLoginBtn} className='bg-secondary px-8 py-1 rounded-2xl text-accent font-semibold'>Log In</button>
                        <button onClick={handleRegisterBtn} className='bg-secondary px-8 py-1 rounded-2xl text-accent font-semibold'>Register</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;