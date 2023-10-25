import Img from 'next/image'


const TopLeftImg = () => {
  return <div className='absolute left-0 top-0 z-10 w-[200px] xl-w-[400px] opacity-70 '>
    <Img  src='/lightning.png' priority={true}  width={400} height={400} alt='top left img'/>

  </div>;
};

export default TopLeftImg;
