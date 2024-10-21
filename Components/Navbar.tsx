"use client";

import { useState } from 'react';
import NavLogo from '../public/Images/lcfc-nav-header 1.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and close icons

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-300 py-2 bg-darkBlue">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
          {/* Logo */}
          <Link href="/">
            <Image
              src={NavLogo}
              alt="logo"
              width={220}
              height={55}
              className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block h-6 w-6 cursor-pointer focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <FiX className="h-6 w-6 text-white" /> : <FiMenu className="h-6 w-6 text-white" />}
          </button>

          {/* Nav Links with "crazy" transitions */}
          <nav
            className={`${
              open ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto w-full transition-transform transform duration-700 ease-in-out ${
              open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          >
            <ul className="text-base text-white lg:flex lg:justify-between lg:space-x-6">
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold transition-transform duration-300 ease-in-out hover:scale-125">
                <Link href="/">Home</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold transition-transform duration-300 ease-in-out hover:scale-125">
                <Link href="/matches">Matches</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold transition-transform duration-300 ease-in-out hover:scale-125">
                <Link href="/teams">Teams</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold transition-transform duration-300 ease-in-out hover:scale-125">
                <Link href="/foxes-hub">Foxes Hub</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold transition-transform duration-300 ease-in-out hover:scale-125">
                <Link href="/hospitality">Hospitality</Link>
              </li>
              <li className="py-2 px-4 lg:px-6 lg:py-2 bg-white text-darkBlue rounded-xl font-semibold transition-all duration-500 hover:bg-gray-200 hover:scale-110 hover:shadow-lg">
                <Link href="/login">Sign in</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
