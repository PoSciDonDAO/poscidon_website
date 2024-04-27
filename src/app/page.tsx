'use client';

import { useRef, useEffect, useState } from 'react';
import ContactUs from './components/ContactUs';
import Button from './components/Button';
import styles from './components/Button.module.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <main
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        px-8
        xl+:w-[85%] 
        "
    >
      <header
        className={`
        animate-fadeUp 
        flex 
        flex-col 
        items-center 
        justify-center
        w-full
        py-16
        `}
      >
        <Hero />
        <p
          className={`
          w-[80%]
          py-8 
          text-center
          font-proxima
          text-base 
          transition-all
          duration-500
          md:text-lg
          lg:text-2xl
          `}
        >
          PoSciDonDAO is a Decentralized Autonomous Organisation (DAO) that
          funds personalized medicine research for{' '}
          <span className="font-proximaBold">life-altering diseases</span>{' '}
          (incl. cancer and Alzheimer's disease). Together with your help we can{' '}
          <span className="font-proximaBold">change the lives of people </span>{' '}
          affected by these diseases.
        </p>
        <div className="flex gap-4">
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Join our community`}
            href={'https://discord.gg/75SrHpcNSZ'}
            icon={
              <FontAwesomeIcon
                icon={faUsers}
                className="pr-2"
                style={{ color: '#FDFDFD' }}
              />
            }
            style={styles.primary}
          />
        </div>
      </header>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        className={`
        animate-fadeUp 
        my-16 
        flex 
        w-full
        items-center
        justify-center
        `}
      >
        <Cards />
      </section>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <section
        ref={sectionRef}
        className={`
        my-16
        w-full  
        ${isVisible ? 'animate-fadeUp' : ''}
        `}
      >
        <ContactUs />
      </section>
    </main>
  );
}
