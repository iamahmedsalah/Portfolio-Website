// Next Image
import Img from 'next/image';






const Circles = () => {
  return <div className=' w-[250px] xl:[300px] absolute -right-1 -bottom-1
   animate-pulse duration-75 z-10'>
      <Img 
      src={'/circles.png'}
      width={260}
      height={200}
      className='w-full h-full'
      priority='true'
      alt=''/>
    </div>;
};

export default Circles;
