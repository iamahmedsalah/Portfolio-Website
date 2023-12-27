import {Sora} from '@next/font/google';
import { Ubuntu_Mono } from '@next/font/google';


// Font Settings
const  sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500' ,'600','700', '800']
})


const ubuntu = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  weight: ['400','700']
})




//Components

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({children}) => {
  return <div className={`page bg-site text-white bg-no-repeat ${sora.variable}font-sora ${ubuntu.variable}font-ubuntu-mono`} >
    <Nav/>
    <Header/>
    <TopLeftImg/>
    {children}
    </div>
};

export default Layout;
