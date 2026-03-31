import React from 'react';
import PricingCard from './pricingCard';

const PricingSection = () => {
    return (
       <div className='py-20'>
        <div className='max-w-11/12 lg:max-w-10/12 mx-auto text-center gap-8 '>
                <h3 className='font-bold text-4xl text-gray-900'>Simple, Transparent Pricing</h3>
                  <p className="text-gray-600 my-4 pb-4">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    <PricingCard/>
                      
             
        </div>
        </div>
    );
};

export default PricingSection;