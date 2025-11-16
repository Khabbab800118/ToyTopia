import React from 'react';
import { FaStar } from 'react-icons/fa';

const PolpularDataCard = ({ singlePopularToyData }) => {
    return (
        <div className="hero bg-base-200 rounded-box">
            <div className="hero-content flex-col">
                <img
                    src={singlePopularToyData.pictureURL}
                    className="max-w-xs rounded-lg shadow"
                />
                <div>
                    <h1 className="text-2xl font-bold">{singlePopularToyData.toyName}</h1>
                    <p className="py-6"> {singlePopularToyData.description} </p>
                    <div className=''>
                        <p className='btn bg-secondary'><FaStar></FaStar> {singlePopularToyData.rating}</p>
                        <p className='btn bg-secondary'>
                            <span>Left : </span>
                            <span className='text-red-800 font-semibold'>{singlePopularToyData.availableQuantity}</span>
                            <span>pc  only</span>
                        </p>
                        <h1 className="text-2xl font-bold">{singlePopularToyData.price} USD</h1>
                        <button className="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolpularDataCard;