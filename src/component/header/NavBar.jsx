import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const NavBar = ({cartItemNumber}) => {
  console.log(cartItemNumber, 'cartItemNumber');
  return (
    <div className="bg-base-100 shadow-sm">
    <div className="navbar bg-base-100 max-w-11/12 lg:max-w-9/12 mx-auto px-0">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold py-4">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">
          <li>
            <a className="text-[#101727] text-sm font-semibold">Products</a>
          </li>
      <li>
            <a className="text-[#101727] text-sm font-semibold">Features</a>
          </li>
            <li>
            <a className="text-[#101727] text-sm font-semibold">Pricing</a>
          </li>
            <li>
            <a className="text-[#101727] text-sm font-semibold">Testimonial</a>
          </li>
              <li>
            <a className="text-[#101727] text-sm font-semibold">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="relative inline-block">
  <FiShoppingCart className="text-lg" />
  <span className="text-[10px] absolute -top-2 -right-3 bg-red-500 text-white  rounded-full px-1.5">
    {cartItemNumber}
  </span>
</div>

        
        <a className="text-[#101727] text-sm font-semibold">Login</a>
        <a className="btn rounded-full text-white btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">Get Started</a>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
