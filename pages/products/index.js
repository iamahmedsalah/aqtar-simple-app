import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { container, staggerContainer } from '../../variants';


export const getStaticProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();


    return {
        props: { products: data }, // will be passed to the page component as props
    };
}

const products = ({ products }) => {


    return (
        <div className="hero min-h-screen">
            <div className='hero-content mt-2 max-lg:max-w-md'>
                <div className="flex flex-col justify-center items-center  gap-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl pb-5 font-bold"> All Products</motion.h1>
                    <motion.div className='grid grid-cols-4 grid-rows-3 gap-4 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-4  max-lg:flex max-lg:flex-col'
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        {products.map((product) => (
                            <a key={product.id} href={`/products/${product.id}`} >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    variants={staggerContainer}
                                    whileTap={{ scale: 0.95 }}
                                    whileFocus={{ scale: 1.05 }}
                                className="card bg-base-100 shadow-2xl">
                                    <figure>
                                        <img className='h-32 w-40 object-contain pt-4'
                                            src={product.image}
                                        />
                                    </figure>
                                    <div className="card-body text-center h-52">
                                        <h2 className="card-title text-sm font-bold justify-center">{product.title}</h2>
                                        <p className='text-amber-900 font-bold'>$ {product.price}</p>
                                        <p className='text-sm'>Rating: {product.rating.rate}</p>
                                        <div className="card-actions justify-center">
                                            <button className="btn btn-warning">Buy Now</button>
                                        </div>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default products;