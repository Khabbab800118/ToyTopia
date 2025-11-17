import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SliderDataCard = ({ singleSliderData }) => {
    return (
        <div className="carousel-item max-w-svw">
            <div className="hero bg-base-200 rounded-box">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={singleSliderData.pictureURL}
                        className="max-w-sm rounded-lg shadow"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">{singleSliderData.toyName}</h1>
                        <p className="py-6"> {singleSliderData.description} </p>
                        <div className='grid w-fit gap-3'>
                            <p className='btn bg-secondary'><FaStar></FaStar> {singleSliderData.rating}</p>
                            <p className='btn bg-secondary'>
                                <span>Left : </span>
                                <span className='text-red-800 font-semibold'>{singleSliderData.availableQuantity}</span>
                                <span>pc  only</span>
                            </p>
                            <h1 className="text-5xl font-bold">{singleSliderData.price} USD</h1>
                            <Link to={`/toy-details/${singleSliderData.toyId}`} className="btn btn-primary">View More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderDataCard;