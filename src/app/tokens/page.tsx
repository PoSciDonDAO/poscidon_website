import Button from '../components/Button';
import styles from '../components/Button.module.css';
import Image from 'next/image';

export default function Tokens() {
  return (
    <div
      className="
        flex
        w-full
        max-w-full
        flex-col 
        items-center
        justify-center
        sm:pt-12
        md:w-[100%] 
        lg:w-[85%] 
        xl:w-[65%] 
        "
    >
      <div
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        py-8
        "
      >
        <div
          className={`
          flex 
          w-full 
          max-w-full
          items-center 
          justify-center
          text-center
          font-proximaSemiBold
          text-4xl
          text-seaBlue-700
          sm:w-[85%]
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Discover the SCI Token
        </div>
        <p
          className="
            flex
            w-[70%]
            items-center 
            justify-center 
            py-8 
            text-center 
            text-base 
            sm:text-lg
            xl+:w-[50%]
          "
        >
          $SCI is a governance token allowing holders to vote on DAO proposals.
          Revenue from commercialized assets will be used to buy back and burn
          $SCI tokens. $SCI will be released soon!
        </p>
        <Button
          link={true}
          type={'button'}
          href={'/Whitepaper.pdf'}
          onClick={''}
          text={'Read our Whitepaper'}
          icon={''}
          style={styles.btncolor}
        />
      </div>
      <hr className="border-b-1 w-full border-gray-200"></hr>
      <div
        className="
            mx-10 
            grid
            grid-cols-1 
            items-center 
            justify-center
            gap-8
            sm:grid-cols-2
            "
      >
        <div
          className="
            py-4
            "
        >
          <div className="flex">
            <Image alt="dna" src="/dnaBlue.svg" width={40} height={40} />
            <h1
              className="
                    flex
                    p-4
                    font-proximaSemiBold
                    text-4xl
                    text-seaBlue-700
                    sm:text-5xl
                    lg:text-6xl
                    "
            >
              Allocation
            </h1>
          </div>
          <ul
            className="
            list-image-[url(/listArrow.svg)] 
            md:text-xl
            "
          >
            <li>The total supply of $SCI is 18,910,000 tokens.</li>
            <br></br>
            <li>
              At genesis, 10% of the total $SCI supply will be offered through{' '}
              <a
                className="text-seaBlue-700 underline"
                href="https://fairprotocol.eth.limo/"
              >
                Fair Protocol's
              </a>{' '}
              liquidity bootstrap batch auction.
            </li>
            <br></br>
            <li>
              Additionally, 5% of the tokens will be offered to contributors,
              also known as Crew members.
            </li>
          </ul>
        </div>
        <Image
          className="
                    rounded-xl
                    sm:my-8
                    "
          src={'/TokenAllocation.svg'}
          alt=""
          width={500}
          height={500}
        />

        <Image
          className="
            hidden
            w-full
            py-8
            sm:flex
            "
          src={'/poStaking.png'}
          alt="Staking $SCI and $PO tokens"
          width={1000}
          height={1000}
        />
        <div
          className="
                py-4
                "
        >
          <div className="flex justify-start">
            <Image alt="dna" src="/dnaBlue.svg" width={40} height={40} />
            <h1
              className="
                flex
                p-4
                font-proximaSemiBold
                text-4xl
                text-seaBlue-700
                sm:text-5xl
                lg:text-6xl
                "
            >
              Staking
            </h1>
          </div>
          <ul
            className="
            list-image-[url(/listArrow.svg)]
            md:text-xl
            "
          >
            <li>
              Your $SCI can be staked through the{' '}
              <a href={'https://test.poscidon.com/staking'}>
                PoSciDon Protocol
              </a>
              .
            </li>
            <br></br>
            <li>
              Once staked, you will gain voting power allowing you to vote on
              DAO proposals.
            </li>
            <br></br>
            <li>
              After on-chain voting on proposals, you will receive the
              untradable $PO token.
            </li>
            <br></br>
            <li>
              When $PO is staked together with $SCI, you will receive more $SCI
              tokens on a daily basis.
            </li>
          </ul>
        </div>
        <Image
          className="
            flex
            w-full
            sm:hidden
            sm:py-8
            "
          src={'/poStaking.png'}
          alt="Staking $SCI and $PO tokens"
          width={1000}
          height={1000}
        />

        <div
          className="
                pt-4
                pb-8
                "
        >
          <div className="flex w-full justify-start">
            <Image alt="dna" src="/dnaBlue.svg" width={40} height={40} />
            <div
              className="
                            flex
                            p-4
                            font-proximaSemiBold
                            text-4xl
                            text-seaBlue-700
                            sm:text-5xl
                            lg:text-6xl
                            "
            >
              Burning
            </div>
          </div>
          <ul
            className="
            list-image-[url(/listArrow.svg)] 
            md:text-xl"
          >
            <li>
              30% of the revenue will be used to buy $SCI from the market.
            </li>
            <br></br>
            <li>Those $SCI tokens will then be burned.</li>
            <br></br>
            <li>
              Lower token supply leads to higher value per $SCI token, given the
              total market capitalization stays the same.
            </li>
          </ul>
        </div>
        <Image
          className="
                    w-full
                    pb-8
                    sm:pt-4
                    "
          src={'/buy-back.png'}
          alt="Burning $SCI tokens"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
