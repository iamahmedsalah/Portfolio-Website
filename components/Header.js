// Next image
import Img from 'next/image';

// Next links
import Link from 'next/link';

// Components
import Socials from '../components/Socials';




const Header = () => {
  return (
    <header className=" absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[140px]">
      <div className=" container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2
        py-8' >
          {/* logo */}
          <Link href={'/'}>
            <Img 
            className='w-auto h-auto'
            src={'/logo1.png'}
            width={260}
            height={28}
            alt='logo'
            priority={true}/>
          </Link>
          {/* Socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
