import ContactUs from './components/ContactUs';
import Button from './components/Button';
import styles from './components/Button.module.css';
import Cards from './components/Cards';
import Hero from './components/Hero';

export default function Home() {

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
        sm:pt-12
        xl+:w-[70%] 
        "
    >
      <section
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        pt-8
        pb-16
        "
      >
        <Hero/>
        <p
          className={`
          w-[80%]
          sm:w-[70%]
          py-8 
          text-center
          text-base 
          md:text-lg
          font-proxima
          xl:text-2xl
          `}
        >
          PoSciDon Decentralized Autonomous Organisation (DAO) 
          funds personalized medicine research
          {' '}for <span className='font-proximaBold'>life-altering diseases</span> (incl. cancer and Alzheimer's disease). 
          Together with your help we 
          can <span className='font-proximaBold'>change the lives of people </span> affected by these diseases.
        </p>
        <div className="flex gap-4">
          {/* <Button
            link={true}
            type={'button'}
            target={'_blank'}
            onClick={null}
            text={`Become a donor`}
            href={'https://test.poscidon.com/donation'}
            icon={''}
            style={styles.primary}
          /> */}
          <Button
            link={true}
            type={'button'}
            onClick={null}
            target={'_blank'}
            text={`Join the DAO`}
            href={'https://discord.gg/QKzZkrYpw7'}
            icon={''}
            style={styles.primary}
          />
        </div>
      </section>
      <section className='
      flex 
      justify-center 
      items-center 
      py-8 
      w-full
      '>
        <Cards/>
      </section>  
      <section className='py-8 w-full'>
        <ContactUs />
      </section>

    </main>
  );
}
