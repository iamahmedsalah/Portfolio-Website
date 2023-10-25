import Link from 'next/link';
import {
  RiInstagramLine,
  RiFacebookFill,
  RiWhatsappLine,
  RiLinkedinFill,
  RiGithubFill,
}from 'react-icons/ri'




const Socials = () => {
  return <div className=' flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.facebook.com/iamahmedsoliman/'} className=" hover:text-amber-500 transition-all duration-300"> 
    <RiFacebookFill/>
  </Link>
  <Link href={''} className=" hover:text-amber-500 transition-all duration-300"> 
    <RiInstagramLine/>
  </Link>
  <Link href={''} className=" hover:text-amber-500 transition-all duration-300"> 
    <RiWhatsappLine/>
  </Link>
  <Link href={'https://github.com/iamahmedsalah'} className=" hover:text-amber-500 transition-all duration-300"> 
    <RiGithubFill/>
  </Link>
  <Link href={'https://www.linkedin.com/in/iamahmedsoliman/'} className=" hover:text-amber-500 transition-all duration-300"> 
    <RiLinkedinFill/>
  </Link>
  </div>;
};

export default Socials;
