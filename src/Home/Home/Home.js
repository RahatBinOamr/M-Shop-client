import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Product/Products';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div className='mb-10'>
            <Banner></Banner>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
               
                <ProductCategory></ProductCategory>
               
                <Products></Products> 
            </div>
        </div>
    );
};

export default Home;