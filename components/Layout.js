import React from 'react';


// Fonts
import { Audiowide } from "next/font/google";
import { Ubuntu_Mono } from 'next/font/google';



const ubuntu = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-ubuntu-mono',
  weight: ['400', '700']
});


const audiowideFont = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});



//Components

import Nav from '../components/Nav';
import Socials from '../components/Socials';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({children}) => {
  return <div className={`page text-white bg-no-repeat ${audiowideFont.variable} font-audiowide`} >
    <Nav/>
    <Socials/>
    <TopLeftImg/>
    {children}
    </div>
};

export default Layout;
