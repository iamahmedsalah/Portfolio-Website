// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';


// icons
import {
  FcContacts,
  FcInfo,
  FcWorkflow,
  FcServices
} from "react-icons/fc"

import Image from "next/image";
import Logo from "../public/Binance-Coin-Crypto.png";

import {motion} from 'framer-motion';
// nav data
export const navData = [
  { id: 1, name: "Skills", path: "/skills", icon: <FcServices/> },
  { id: 2, name: "Projects", path: "/projects", icon: <FcWorkflow  /> },
  { id: 3, path: "/", icon: <Image priority={true}  className="animate-spin" src={Logo} alt="logo" width={50} height={50} /> },
  { id: 4, name: "About", path: "/about", icon: <FcInfo  /> },
  { id: 5, name: "Contact", path: "/contact", icon: <FcContacts /> },
];


// next link
import Link from 'next/link'
// next router
import {useRouter} from 'next/router'
const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname
  return (
    <nav>
    {/* nav link */}
    <ul
      className="flex justify-center items-center w-fit mx-auto gap-16 mt-5 z-50 bg-secondary/30  shadow-2xl outline outline-amber-600 
      p-2.5 px-10 rounded-full max-sm:rounded-none max-lg:mt-0  max-sm:gap-[30px] "
    >
      {navData.map((link, index) => (
        <motion.li
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.2 },
          }}
          key={index}
        >
          <Link
            className={`${
              link.path === pathname &&
              "flex text-amber-500 duration-200  ease-in-out"
            } flex flex-col items-center gap-1`}
            href={link.path}
          >
            <span className="pb-0.5">{link.icon}</span>
            <span className="text-xs ">{link.name}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
    {/* CV Link */}
    {/* <div className="absolute top-[27px] ml-30 max-md:hidden">
      <motion.button
        onClick={DownloadCv}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.2 },
        }}
        className="flex gap-3 cursor-pointer text-gray-950 font-semibold bg-gray-700/10 px-7 py-3 rounded-full backdrop-blur-2xl shadow-xl"
      >
        <Image src={CvIcon} alt="cv-icon" width={20} height={20} />
      </motion.button>
    </div> */}
  </nav>
  )
};

export default Nav;




