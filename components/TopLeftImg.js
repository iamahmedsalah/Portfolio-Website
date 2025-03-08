import Img from 'next/image'


const TopLeftImg = () => {
  return <div className='absolute left-0 top-0 z-10 w-[200px]  max-lg:w-0 opacity-70 '>
    <Img  src='/Binance-Coin-Crypto.png' priority={true}  width={300} height={300} alt='top left img' className=' animate-spin-slow'/>

  </div>;
};

export default TopLeftImg;
