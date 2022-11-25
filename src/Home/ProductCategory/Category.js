import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhonesCategorySummary from './PhonesCategorySummary';

const Category = () => {
    const phonesCategory =useLoaderData()
    // console.log('category', phonesCategory);
    return (
        <div className='mt-4' >
      
        <h1> CateGory Phones : {phonesCategory.length} </h1>
       
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
        {
            
            phonesCategory.map(phoneCategory=><PhonesCategorySummary
                key={phoneCategory.id}
                phoneCategory={phoneCategory}
                ></PhonesCategorySummary>)
        }
      </div>
       
    </div>
    );
};

export default Category;