import React from 'react';
import { useLoaderData } from 'react-router';
import Header from '../components/Header';
import SingleToyDataCard from '../components/SingleToyDataCard';

const AllToys = () => {
    const allToysData = useLoaderData();
    console.log(allToysData);

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='mt-5'>
                <h1 className='font-bold text-5xl text-center'>All Our Toys</h1>
                <div className='lg:grid lg:grid-cols-3 gap-3 p-4'>
                    {
                        allToysData.map(singleToyData => <SingleToyDataCard key={singleToyData.toyId} singleToyData={singleToyData}></SingleToyDataCard>)
                    }
                </div>
            </main>
        </div>
    );
};

export default AllToys;