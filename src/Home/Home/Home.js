import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               
                <ProductCategory></ProductCategory>
               
                <Product></Product> 
            </div>
        </div>
    );
};

export default Home;