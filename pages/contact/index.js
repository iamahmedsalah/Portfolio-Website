// Variants
import {fadeIn} from '../../variants';

import {BsArrowRight} from 'react-icons/bs'



const Contact = () => {
  return <div className='h-full'>
    <div className=' container mx-auto text-center xl:text-left flex items-center justify-center h-[85vh]'>
      {/* text & form */}
    <div className='flex flex-col w-full max-w-[500px]'>
      {/* text */}
      <h2 className='h2 text-center '> let&apos;s <span className='text-amber-500'>connect.</span></h2>
      {/* form */}
      <form className='flex flex-col gap-6 w-full mx-auto' action=''>
        {/* input group */}
        <div className='flex gap-x-6 w-full  '>
          <input type="text" placeholder='name' className='input' />
          <input type="email" placeholder='email' className='input' />
        </div>
        <input type="email" placeholder='subject' className='input' />
        <textarea placeholder='message' className='textarea'></textarea>
        <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 
        flex flex-center justify-center overflow-hidden hover:border-amber-500 group'>
          <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 pt-3'> let&apos;s talk</span>
          <BsArrowRight className='pt-3 -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
          transition-all duration-300 absolute text-[37px]  text-amber-500'/>
        </button>
      </form>
    </div>
    </div>
  </div>;
};

export default Contact;
