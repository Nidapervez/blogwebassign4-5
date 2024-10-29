import React from 'react';
import image from "../nidz.jpg";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <header className="text-black body-font bg-rose-100 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <Image src={image} alt="NidzWEb Logo" height={50} width={50} />
            <span className="ml-3 text-xl">NidzWEb</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 font-mono text-xl transition duration-300 ease-in-out">Home</Link>
            <Link href="/about" className="mr-5 hover:text-gray-900 font-mono text-xl   transition duration-300 ease-in-out">About</Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900 font-mono text-xl  transition duration-300 ease-in-out">Contact</Link>
           
            <Link href="/blogs" className="mr-5 hover:text-gray-900 font-mono text-xl  transition duration-300 ease-in-out">Blogs</Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

