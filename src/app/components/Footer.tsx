import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';
import Logo from '/public/logo.svg';

export default function Footer() {
  return (
    <div
      className="
      items-center 
      flex 
      flex-col
      w-full
      max-w-full 
      justify-center
      pt-8
      "
    >
      <div
        className=" 
        flex
        "
      >
        <div
          className="
          flex 
          flex-col
          justify-between
          items-center
          "
        >
          <Link href="/" className="flex sm:w-[10rem] w-[5rem]">
            <Image
              width={1000}
              height={1000}
              src={Logo}
              alt="PoSciDon logo"
            />
          </Link>
        </div>
        <div className="
        grid 
        grid-cols-2 
        md:grid-cols-3 
        w-full 
        max-w-full 
        items-start 
        justify-start 
        md:gap-24 
        gap-4 
        sm:px-4
        ">
          <div className="flex flex-col gap-2 pt-2">
            <p className="
            text-sm 
            text-seaBlue-700
            font-proximaSemiBold
            ">ABOUT POSCIDON DAO</p>
            <Link 
            className="hover:text-seaBlue-700" 
            href={'/research'}>For scientists</Link>
            <Link className="hover:text-seaBlue-700" href="/tokens">Tokens</Link>
            <Link
              target="_blank"
              className="hover:text-seaBlue-700" 
              href="/whitepaper.pdf"
              title='PoSciDon Whitepaper'
            >
              Whitepaper
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p className="
            text-sm 
            text-seaBlue-700
            font-proximaSemiBold
            ">GET INVOLVED</p>
            <Link 
            className="hover:text-seaBlue-700" 
            href="https://test.poscidon.com/donation"
            target="_blank"
            >Become a donor</Link>
            <Link 
            className="hover:text-seaBlue-700" 
            href="https://forms.gle/hY52XW7inek4ynrR6" target='_blank'>
              Become a contributor
            </Link>
            <Link 
            className="hover:text-seaBlue-700" 
            href="/submit-project">
              Submit project
            </Link>
            <Link 
            aria-label="Join PoSciDon DAO's Discord server"
            className="hover:text-seaBlue-700" 
            href="https://discord.gg/TXZZV5KXmn" target="_blank">
              Join our discord
            </Link>
            <Link 
            aria-label="Visit PoSciDon DAO's X (formerly known as Twitter) profile" 
            className="hover:text-seaBlue-700" 
            href="https://twitter.com/poscidondao" target="_blank">
              Join our twitter
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p className="
            text-sm 
            text-seaBlue-700
            font-proximaSemiBold">OTHER</p>
            <Link className="hover:text-seaBlue-700" target="_blank" href={'/brand-guidelines.pdf'}>Brand guidelines</Link>
            <Link className="hover:text-seaBlue-700" href={'/privacy-policy'}>Privacy policy</Link>
          </div>
        </div>
      </div>
      {/* <div className='
            text-center
            w-full
            '> */}
            {/* <Button
            link={true}
            href='https://test.poscidon.com/'
            onClick={''}
            type="button"
            text="Visit app"
            icon=''
            style={styles.btncolor}
            /> */}
            {/* </div> */}
      <Socials/>
    </div>
  );
}
