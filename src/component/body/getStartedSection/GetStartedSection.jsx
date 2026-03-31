import React from 'react';

import GetStartedCards from './GetStartedCards';
const GetStartedSection = () => {
    return (
        <div className='py-20 bg-gray-100'>
        <div className='max-w-11/12 lg:max-w-10/12 mx-auto text-center gap-8 '>
                <h3 className='font-bold text-4xl text-gray-900'>Get Started in 3 Steps</h3>
                  <p className="text-gray-600 my-4 pb-4">Start using premium digital tools in minutes, not hours.</p>
            
                        <GetStartedCards/>
                 
             
        </div>
        </div>
    );
};

export default GetStartedSection;