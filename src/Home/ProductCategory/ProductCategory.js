import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const [categories, setCatagories]= useState([])
   
    useEffect(()=>{
        fetch(`https://used-mobile-server.vercel.app/category`)
        .then(res=>res.json())
        .then(data=> setCatagories(data))
    },[])
    return (
        <div className='basis-1/4 '>
            <h2 className='text-3xl font-semibold'> Total Category {categories.length} </h2>
            {
                categories.map(categoryPhones=>  <p key={categoryPhones._id}>
                    <Link to={`/category/${categoryPhones.id}`}> {categoryPhones.name} </Link>

                </p> )
            }
        </div>
    );
};

export default ProductCategory;