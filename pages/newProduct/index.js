import React, { useState } from 'react';
import Input from '@/components/inputs';
import { PackagePlus } from 'lucide-react';

const NewProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newProduct, setNewProduct] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const productData = {
            title: productName,
            price: productPrice,
            description: productDescription,
            image: productImage,
            category: productCategory,
        };

        try {
            const res = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (!res.ok) {
                alert('Failed to add product. Please try again.');
                return;
            }

            const data = await res.json();
            console.log('Product added:', data);
            alert('Product added successfully!');
            setNewProduct(data);

            // Reset form fields
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            setProductImage('');
            setProductCategory('');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-row justify-evenly items-center flex-wrap gap-3">
                <div className="bg-amber-900/40 shadow-2xl flex flex-col justify-center items-center gap-4 p-5  rounded-3xl">
                    <h1 className="text-3xl font-bold text-center pt-10 py-5">
                        Add New Product
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="floating-label select:bg-transparent">
                            <span className='focus:bg-transparent'> Enter Name</span>
                            <Input
                            icno={PackagePlus}
                            type="text"
                            placeholder="Product Name"
                            autoComplete="name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        </label>
                        <Input
                            icno={PackagePlus}
                            type="number"
                            placeholder="Product Price"
                            autoComplete="price"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                        <Input
                            icno={PackagePlus}
                            type="text"
                            placeholder="Product Description"
                            autoComplete="description"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                        />
                        <Input
                            icno={PackagePlus}
                            type="text"
                            placeholder="Product Image URL"
                            autoComplete="image"
                            value={productImage}
                            onChange={(e) => setProductImage(e.target.value)}
                        />
                        <Input
                            icno={PackagePlus}
                            type="text"
                            placeholder="Product Category"
                            autoComplete="category"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-warning mt-4"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Add Product'}
                        </button>
                    </form>
                </div>
                {/* Display the newly added product */}
                {newProduct && (
                    <div className="bg-amber-900/40  shadow-lg p-5 rounded-3xl mt-5">
                        <h2 className="text-2xl font-bold text-center">New Product Added</h2>
                        <div className="flex flex-col justify-center items-center gap-4 mt-4">
                            <img
                                src={newProduct.image}
                                alt={newProduct.title}
                                className="h-32 w-32 object-contain"
                            />
                            <h3 className="text-xl font-bold">{newProduct.title}</h3>
                            <p className="text-lg text-amber-900 font-bold">$ {newProduct.price}</p>
                            <p className="text-sm">{newProduct.description}</p>
                            <p className="text-sm italic">Category: {newProduct.category}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewProduct;