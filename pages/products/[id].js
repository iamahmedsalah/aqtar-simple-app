import React, { useState } from 'react';

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();


    const paths = products.map((product) => ({
        params: { id: product.id.toString() }, // Convert id to string for dynamic routing
    }
    ));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    return {
        props: { product },
    };
};

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const ProductDetails = ({ product }) => {

    const handleDelete = async () => {
        if (!product) return;

        try {
            const res = await fetch(`/api/create/${product.id}`, {
                method: 'DELETE',
            });

            if (!res.ok) {
                alert('Failed to delete product. Please try again.');
                return;
            }

            alert('Product deleted successfully!');
            // Clear the new product from the state
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product. Please try again.');
        }
    };

    return (
        <div className="hero max-h-screen flex flex-row justify-evenly items-center flex-wrap ">
            <motion.div className="hero-content text-center"
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden">
                <div className="max-w-md  justify-center items-center flex flex-col gap-4 ">
                    <h1 className="text-xl  text-amber-900 max-lg:text-xl font-bold">{product.title}</h1>
                    <figure>
                        <img className='h-1/2 w-50 max-lg:max-w-32 object-cover mix-blend-mode-multiply rounded-4xl border-2  shadow-3xl'
                            src={product.image}
                        />
                    </figure>
                    <div className="max-w-md flex flex-row justify-start items-start flex-nowrap gap-4">
                        <h3 className=''>category  <span className='inline-block text-white' >{product.category}</span></h3>
                        <p className="max-lg:text-xs ">Price  <span className='inline-block text-white'> $ {product.price}</span></p>
                        <p>Rating<span className='inline-block text-white'>{product.rating.rate}</span></p>
                        <p>Count<span className='inline-block text-white'>{product.rating.count}</span> </p>
                    </div>
                    <p className="pb-6 max-lg:text-xs  class">{product.description}</p>
                    
                </div>
            </motion.div>
            <motion.div className="hero-content text-center"
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden">
                <div className="flex flex-col justify-evenly items-center flex-wrap gap-3">
                    <button
                        onClick={handleDelete}
                        className="btn btn-outline text-gray-950  ">
                        Delete Product
                    </button>
                    <button
                        onClick={handleDelete}
                        className="btn btn-outline text-gray-950 mt-7 ">
                        Update Product
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductDetails;