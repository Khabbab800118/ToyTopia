import React from 'react';
import SliderDataCard from './SliderDataCard';

const Drawer = ({ sliderData }) => {
    return (
        <div className="carousel carousel-center bg-base-100 max-w-screen max-h-screen space-x-4 p-4">
            {
                sliderData.map(singleSliderData => <SliderDataCard key={singleSliderData.toyId} singleSliderData={singleSliderData}></SliderDataCard>)
            }
        </div>
    );
};

export default Drawer;