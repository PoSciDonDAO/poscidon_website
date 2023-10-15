import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';

export default function Footer() {
  return (
    <div
      className="
      items-space 
      flex 
      flex-col
      w-full
      max-w-full 
      justify-center
      "
    >
      <div
        className=" 
        flex
        py-4
        "
      >
        <div
          className="
        flex 
        flex-col
        justify-between
        items-center
        sm:px-8
        px-2
        "
        >
          <Link href="/" className="flex sm:w-[10rem] w-[5rem]">
            <Image
              width={1000}
              height={1000}
              className=""
              src={'/LogoMark.svg'}
              alt="PoSciDon logo"
            />
          </Link>
        </div>
        <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        w-full 
        max-w-full 
        items-start 
        justify-start 
        sm:gap-24 
        gap-4 
        sm:px-4
        ">
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-sm text-seaBlue-700">ABOUT POSCIDON DAO</p>
            <Link 
            className="hover:text-seaBlue-700" 
            href={'/'}>For scientists</Link>
            <Link className="hover:text-seaBlue-700" href="/tokens">Tokens</Link>
            <Link
              target="_blank"
              className="hover:text-seaBlue-700" 
              href="/Whitepaper.pdf"
              download="PoSciDon_Whitepaper"
            >
              Whitepaper
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-sm text-seaBlue-700">GET INVOLVED</p>
            <Link 
            className="hover:text-seaBlue-700" 
            href="https://test.poscidon.com/donation"
            target="_blank"
            >Become a donor</Link>
            <Link 
            className="hover:text-seaBlue-700" 
            href={'/'}>Become a contributor</Link>
            <Link 
            className="hover:text-seaBlue-700" 
            href="https://discord.gg/TXZZV5KXmn" target="_blank">Join our discord</Link>
            <Link 
            className="hover:text-seaBlue-700" 
            href="https://twitter.com/poscidondao" target="_blank">
              Join our twitter
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-sm text-seaBlue-700">FINE PRINT</p>
            <Link className="hover:text-seaBlue-700" href={'/'}>Brand guidelines</Link>
            <Link className="hover:text-seaBlue-700" href={'/'}>Privacy policy</Link>
          </div>
        </div>
      </div>
      <Socials/>
      <div className="flex w-full pt-2 flex-col">
        <hr className="border-b-1 w-full border-gray-200"></hr>
        <div
          className=" 
        flex 
        h-20
        items-center
        justify-center
        text-gray-400
        "
        >
          © PoSciDon DAO. All rights reserved.
        </div>
      </div>
    </div>
  );
}
