import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
const Header = () => {
    return (
        <motion.div className='flex flex-col justify-center items-center z-20 pt-10'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}>
            <Image
                className="animate-[spin_4s_ease-in-out_infinite]"
                src="/AQTAR.png"
                alt="AQTAR logo"
                width={180}
                height={38}
                priority />
        </motion.div>
    );
};

export default Header;