import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
      <div className='bg-gray-900 '>
      <div className="footer mb-0 sm:footer-horizontal grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4  text-neutral-content  text-white  py-20 max-w-11/12 lg:max-w-9/12 mx-auto">
          <div className=''>
            <h2 className='text-3xl text-white font-bold'>DigiTools</h2>
            <p className='opacity-80'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
  <nav>
    <h6 className="text-lg text-white">Product</h6>
    <a className="link link-hover opacity-80">Features</a>
    <a className="link link-hover opacity-80">Pricing</a>
    <a className="link link-hover opacity-80">Templates</a>
    <a className="link link-hover opacity-80">Integrations</a>
  </nav>
  <nav>
    <h6 className="text-lg text-white">Company</h6>
    <a className="link link-hover opacity-80">About us</a>
    <a className="link link-hover opacity-80">Blog</a>
    <a className="link link-hover opacity-80">Jobs</a>
    <a className="link link-hover opacity-80">Press</a>
  </nav>
  <nav>
    <h6 className="text-lg text-white">Resources</h6>
    <a className="link link-hover opacity-80">Documentation</a>
    <a className="link link-hover opacity-80">Help Center</a>
    <a className="link link-hover opacity-80">Community</a>
     <a className="link link-hover opacity-80">Contact</a>
  </nav>
  <div>
    <h4 className="text-lg text-white">Social Links</h4>
    <div className='flex items-center gap-2'>
        <div className='w-[40px] h-[40px] bg-white rounded-full text-gray-900 flex text-xl items-center justify-center'>
            <FaFacebookSquare className='' />
        </div>
         <div className='w-[40px] h-[40px] bg-white rounded-full text-gray-900 flex text-xl items-center justify-center'>
            <AiOutlineInstagram className='' />
        </div>
         <div className='w-[40px] h-[40px] bg-white rounded-full text-gray-900 flex text-xl items-center justify-center'>
            <FaSquareXTwitter className='' />
        </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Footer;