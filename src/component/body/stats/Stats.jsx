import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='max-w-10/12 lg:max-w-8/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 text-center'>
                    <div className=' border-b md:border-r md:border-b-0 border-gray-200'>
                        <h2 className='text-white text-4xl font-bold mb-3'>50K+</h2>
                        <p className='text-gray-200 mb-8 md:mb-0 '>Active Users</p>
                    </div>
                     <div className='border-b md:border-r md:border-b-0 border-gray-200'>
                        <h2 className='text-white text-4xl font-bold mb-3'>200+</h2>
                        <p className='text-gray-200 mb-8 md:mb-0 '>Premium Tools</p>
                    </div>
                     <div className=''>
                        <h2 className='text-white text-4xl font-bold mb-3'>4.9</h2>
                        <p className='text-gray-200 mb-8 md:mb-0 '>Rating</p>
                    </div>
            </div>
        </div>
    );
};

export default Stats;