'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[0.25rem] w-8 my-[0.2rem] rounded-full bg-black transition ease transform duration-300`;
  const [src, setSrc] = useState('./../BlackLogo.svg');

  return (
    <nav
      className="
      top-0
      flex
      h-20
      w-full
      items-center
      justify-between
      border-b-2
      border-seaBlue-700
      bg-white
      px-4
        "
    >
      <Link
        onMouseEnter={() => setSrc('./../BlueLogo.svg')}
        onMouseLeave={() => setSrc('./../BlackLogo.svg')}
        href="/"
      >
        <Image
          width={200}
          height={100}
          className="h-36 shrink-0"
          src={`${src}`}
          alt="PoSciDon logo"
        />
      </Link>
      <div className="flex items-center">


        <div className="ml-10 flex">
          <button
            className="group flex h-9 w-6 flex-col items-center justify-center rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'group-hover:bg-seaBlue-700 mb-[0.35rem] translate-y-3 rotate-45 group-hover:opacity-100'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'opacity-0'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'group-hover:bg-seaBlue-700 -translate-y-3 -rotate-45 group-hover:opacity-100'
                  : 'group-hover:bg-seaBlue-700 group-hover:opacity-100'
              }`}
            />
          </button>
        </div>
        {isOpen && (
          <div
            className="
                    absolute 
                    right-0
                    top-20
                    z-10
                    flex 
                    w-full
                    flex-col 
                    items-center
                    sm:items-center
                    justify-center gap-8 bg-white p-4
                    "
          > <div className='
                  xl:w-[65%]
                  lg:w-[85%]
                  md:w-[100%]
          '>
            <Footer/>
          </div>
              
          </div>
        )}
      </div>
    </nav>
  );
}
