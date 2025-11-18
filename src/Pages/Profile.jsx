import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import Header from '../components/Header';

const Profile = () => {

    const { user } = use(AuthContext);
    console.log(user);

    const photoURL = user?.photoURL || null;
    const displayName = user?.displayName || user?.email || "Guest";
    const email = user?.email || null;

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className='flex flex-col items-center justify-center min-h-screen my-auto'>
                    <p> <span className='font-bold'>Name :</span> {displayName}</p>
                    <p> <span className='font-bold'>PhotoURL :</span> {photoURL}</p>
                    <p> <span className='font-bold'>Email :</span> {email}</p>
                </div>
            </main>
        </div>
    );
};

export default Profile;