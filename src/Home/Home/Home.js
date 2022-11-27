import React from 'react';
import useTitle from '../../Hook/UseTitle';
import Banner from '../Banner/Banner';
import Products from '../Product/Products';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    useTitle('home')
    return (
        <div className='mb-10'>
            <Banner></Banner>
            <div className='flex flex-row sm:flex-shrink-0  '>
               
                <ProductCategory></ProductCategory>
               
                <Products></Products> 
            </div>
        </div>
    );
};

export default Home;