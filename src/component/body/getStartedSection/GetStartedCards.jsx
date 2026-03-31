import React from 'react';
import userImg from '../../../assets/user.png'
import productImg from '../../../assets/package.png'
import RocketImg from '../../../assets/rocket.png'
const GetStartedCards = () => {
    return (
              <div className=' grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 justify-center gap-10'>
               <div className='bg-white shadow-sm rounded-xl border border-gray-50 p-5 text-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] float-right text-white'  ><p className='mt-2'>01</p></div>
                            <div className=' relative w-full flex justify-center pt-5 pb-10'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[100px] h-[100px] mx-auto rounded-full opacity-10 absolute'></div>
                                <img src={userImg} className='w-[60px] mt-5'/>
                            </div>
                            <h2 className='text-gray-900 font-bold text-2xl'>Create Account</h2>
                              <p className="text-gray-600 mt-4 mb-14">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                             <div className='bg-white shadow-sm rounded-xl border border-gray-50 p-5 text-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] float-right text-white'  ><p className='mt-2'>02</p></div>
                            <div className=' relative w-full flex justify-center pt-5 pb-10'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[100px] h-[100px] mx-auto rounded-full opacity-10 absolute'></div>
                                <img src={productImg} className='w-[60px] mt-5'/>
                            </div>
                            <h2 className='text-gray-900 font-bold text-2xl'>Choose Products</h2>
                              <p className="text-gray-600 mt-4 mb-14">Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                             <div className='bg-white shadow-sm rounded-xl border border-gray-50 p-5 text-center'>
                            <div className='w-[40px] h-[40px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] float-right text-white'  ><p className='mt-2'>03</p></div>
                            <div className=' relative w-full flex justify-center pt-5 pb-10'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-[100px] h-[100px] mx-auto rounded-full opacity-10 absolute'></div>
                                <img src={RocketImg} className='w-[60px] mt-5'/>
                            </div>
                            <h2 className='text-gray-900 font-bold text-2xl'>Start Creating</h2>
                              <p className="text-gray-600 mt-4 mb-14">Download and start using your premium tools immediately.</p>
                        </div>
</div>
                        
    );
};

export default GetStartedCards;