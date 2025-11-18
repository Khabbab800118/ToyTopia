import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import PolpularDataCard from './PolpularDataCard';

const Home = () => {
    const popularToysData = useLoaderData();

    const navigator = useNavigate();

    const handleShowAll = () => {
        navigator("/toys")
    }

    return (
        <div>
            <h1 className='font-bold text-5xl text-center text-primary my-5'>Popular Toys</h1>
            <div className='lg:grid lg:grid-cols-3 gap-3 p-4'>
                {
                    popularToysData.map(singlePopularToyData => <PolpularDataCard key={singlePopularToyData.toyId} singlePopularToyData={singlePopularToyData}></PolpularDataCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={handleShowAll} className='btn btn-primary w-fit my-5'>Show All...</button>
            </div>
        </div>
    );
};

export default Home;