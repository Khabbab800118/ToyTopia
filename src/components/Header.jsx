import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';

const Header = () => {

    const navigator = useNavigate();
    const handleLoginBtn = () => {
        navigator("/auth/login");
    }

    return (
        <div className="navbar bg-primary lg:px-10 lg:py-5 text-base-100">
            <div className="navbar-start">
                <h1 className="text-2xl font-semibold">ToyTopia</h1>
            </div>
            <div>
                <NavLink to="/">
                    <FaHome></FaHome>
                </NavLink>
            </div>
            <div className="navbar-end">
                <button onClick={handleLoginBtn} className='bg-secondary px-4 py-1 rounded-2xl text-accent'>Log In</button>
            </div>
        </div>
    );
};

export default Header;