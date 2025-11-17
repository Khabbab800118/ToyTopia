import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SingleToyDataCard = ({ singleToyData }) => {
    return (
        <div className="hero bg-base-200 rounded-box">
            <div className="hero-content flex-col">
                <img
                    src={singleToyData.pictureURL}
                    className="max-w-xs rounded-lg shadow"
                />
                <div>
                    <h1 className="text-2xl font-bold">{singleToyData.toyName}</h1>
                    <p className="py-6"> {singleToyData.description} </p>
                    <div className=''>
                        <p className='btn bg-secondary'><FaStar></FaStar> {singleToyData.rating}</p>
                        <p className='btn bg-secondary'>
                            <span>Left : </span>
                            <span className='text-red-800 font-semibold'>{singleToyData.availableQuantity}</span>
                            <span>pc  only</span>
                        </p>
                        <h1 className="text-2xl font-bold">{singleToyData.price} USD</h1>
                        <Link to={`/toy-details/${singleToyData.toyId}`} className="btn btn-primary">View More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDataCard;