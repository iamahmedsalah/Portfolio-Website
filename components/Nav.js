// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link'
// next router
import {useRouter} from 'next/router'
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname
  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
  bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>
    {/* inner */}
    <div className='flex items-center  w-full xl:flex-col  justify-between xl:justfiy-center gap-y-10 px-4 
    md:px-40 xl:px-0 h-[80px] xl:h-max py-8  bg-red-200/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full '>
      {navData.map((link, index)=>{
        return <Link className={`${link.path === pathname  && 'text-amber-500' }  
        relative flex items-center group hover:text-amber-500 transition`} 
        href={link.path} 
        key={index}>
          {/* tooltip */}
          <div className=' absolute pr-14 right-0 hidden xl:group-hover:flex'>
            <div className=' bg-red-200/10 reletive text-amber-500 flex items-center p-[10px] rounded-[30px] '>
              <div className='text-[15px]  font-semibold capitalize'>
                {link.name}
                </div>
                {/* circle */}
                <div className='w-12 h-12 bg-red-200/10 rounded-full absolute -right-3'>
                </div>
            </div>
          </div>
        {/* icons */}
        <div> {link.icon} </div>
        </Link>
      })}
    </div>
    </nav>;
};

export default Nav;




                // {/* triangle */}
                // <div className='border-t-[5px] border-t-transparent 
                // border-l-[5px] border-l-red-200/10 absolute -right-2
                // border-b-[5px] border-b-transparent '>
                // </div>