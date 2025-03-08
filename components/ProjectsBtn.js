//Next Image
import Img from 'next/image';
// Next Link
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';


const ProjectsBtn = () => {
  return <div className=' mx-auto xl:mx-0 '>
    <Link href={'/projects'} className=" relative w-[150px] h-[150px] flex justify-center items-center
    bg-circleStar bg-cover bg-center bg-no-repeat group">
    <Img
    src={'/rounded-text.png'}
    width={141}
    height={148}
    alt=''
    className='animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]'/>
    <HiArrowRight className=' absolute text-4xl group-hover:translate-x-2   hover:text-amber-500
    transition-all duration-300'/>
    </Link>
    </div>;
};

export default ProjectsBtn;
