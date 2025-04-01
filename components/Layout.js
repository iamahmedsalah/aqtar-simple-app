import React from 'react';


import {Audiowide, Geist_Mono  } from "next/font/google";

const audiowideFont = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Components
import CicrleShape from "@/components/FloatlingShape";
import Header from "@/components/Header";

const Layout = ({children}) => {
    return (
        <div className={`min-h-screen ${audiowideFont.variable} font-Audiowide bg-gradient-to-br from-amber-900 via-yellow-500 to-yellow-500 `}>
            <CicrleShape color='bg-amber-500' size='w-64 h-64'  top='-5%' left='10%'/>
            <CicrleShape color='bg-amber-900' size='w-32 h-32'  top='50%' left='20%'/>
            <Header/>

            {children}
        </div>
    );
};

export default Layout;