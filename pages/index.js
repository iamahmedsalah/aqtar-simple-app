import Link from 'next/link';


export const ProductsNav = [
  { id: 1, name: "All Products", path: "/products", },
  { id: 2, name: "New Product", path: "/newProduct", },
];


import { motion } from 'framer-motion';
import { container, staggerContainer } from '../variants';
export default function Home() {




  return (
    <motion.div variants={container}
    initial="hidden"
    animate="show"
    exit={"hidden"} >
      <main className="flex max-h-screen flex-col pt-10 justify-start items-center gap-4">
        <motion.h1 variants={staggerContainer} className="text-4xl font-bold">AQTAR-TASK</motion.h1>
        <motion.p variants={staggerContainer} className="text-lg">Build a Simple Products App</motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-row justify-start items-start flex-nowrap gap-4 max-sm:flex-col">
          {ProductsNav.map((link, index) => (
            <motion.div
              variants={staggerContainer}
              key={index}>
              <Link href={link.path}>
                <motion.button
                  key={link.id}
                  className="btn btn-neutral max-sm:w-40 md:btn-md  lg:btn-lg xl:btn-xl rounded-2xl">
                  {link.name}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}
