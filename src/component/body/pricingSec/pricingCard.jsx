import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingCard = () => {
    return (
        <div className='grid grid-cols-2 md:grid-col-2 lg:grid-cols-3 justify-center gap-10 items-stretch'>
                <div className='flex flex-col rounded-xl bg-gray-100 p-8 text-left'>
                      <h2 className='font-bold text-xl text-gray-900'>Starter</h2>
                      <p className="text-gray-600 mt-1 mb-6 pb-0">Perfect for getting started</p>
                      <p className='text-xl text-gray-600 mb-6'><strong className='text-4xl font-bold text-gray-900'>$0</strong>/Month </p>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Access to 10 free tools</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Basic templates</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Community support</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>1 project per month</span>
                      <button className='mt-auto w-full btn py-6  rounded-full text-white btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-300 
   hover:from-[#9514FA] hover:to-[#4F39F6]'>Get Started Free</button>
                </div>
                       <div className='flex flex-col rounded-xl bg-gray-100 p-8 text-left bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                      <h2 className='font-bold text-xl text-white'>Pro</h2>
                      <p className="text-gray-50 mt-1 mb-6 pb-0">Best for professionals</p>
                      <p className='text-xl text-white mb-6'><strong className='text-4xl font-bold text-white'>$29</strong>/Month </p>
                      <span className="text-white flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Access to all premium tools</span>
                      <span className="text-white flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Unlimited templates</span>
                      <span className="text-white flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Priority support</span>
                      <span className="text-white flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Cloud sync</span>
                      <span className="text-white flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Advanced analytics</span>
                      <button className='mt-auto  w-full btn py-6  rounded-full text-gray-900 btn-md btn-outline bg-white  transition-all duration-300 
   hover:from-[#9514FA] hover:to-[#4F39F6]'>Start Pro Trail</button>
                </div>
                       <div className='flex flex-col rounded-xl bg-gray-100 p-8 text-left'>
                      <h2 className='font-bold text-xl text-gray-900'>Starter</h2>
                      <p className="text-gray-600 mt-1 mb-6 pb-0">Perfect for getting started</p>
                      <p className='text-xl text-gray-600 mb-6'><strong className='text-4xl font-bold text-gray-900'>$0</strong>/Month </p>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Access to 10 free tools</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Basic templates</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>Community support</span>
                      <span className="text-gray-600 flex gap-2 items-center"><span className="text-green-500"><FaCheck /></span>1 project per month</span>
                      <button className=' mt-[70px] w-full btn py-6  rounded-full text-white btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all duration-300 
   hover:from-[#9514FA] hover:to-[#4F39F6]'>Contact Sales</button>
                </div>
        </div>
    );
};

export default PricingCard;