import React from 'react';

const CopyRight = () => {
    return (
        <div className='bg-gray-900'>
       <div className=' max-w-11/12 lg:max-w-9/12 mx-auto py-10'>
               <div class="divider divider-success opacity-10"></div>

              <div className='flex justify-center items-center w-full flex-col md:flex-row md:justify-between'>
                    <div>
                        <p className='text-gray-50 opacity-85'>© 2026 Digitools. All rights reserved.</p>
                    </div>
                     <div className='flex gap-5'>
                        <a className='text-gray-50 opacity-85'>Privacy Policy </a>
                        <a className='text-gray-50 opacity-85'>Terms of Service </a>
                        <a className='text-gray-50 opacity-85'>Cookies</a>
                    </div>
                </div>  
        </div>
        </div>
 
    );
};

export default CopyRight;