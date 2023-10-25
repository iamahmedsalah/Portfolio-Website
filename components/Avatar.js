// Next Image
import Img from 'next/image';



const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Img 
    src={'/Avatar-1.png'}
    width={737}
    height={678}
    alt=''
    className=' translate-z-0 w-auto h-auto'/>
  </div>;
};

export default Avatar;
