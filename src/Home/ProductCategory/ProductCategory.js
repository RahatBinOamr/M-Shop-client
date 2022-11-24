import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = () => {
    const [categories, setCatagories]= useState([])
   
    useEffect(()=>{
        fetch(`http://localhost:5000/phonesCategory`)
        .then(res=>res.json())
        .then(data=> setCatagories(data))
    },[])
    return (
        <div className='basis-1/4'>
            <h2 className='text-3xl font-semibold'> Total Category {categories.length} </h2>
            {
                categories.map(category=> <p key={category.id}>
                    <Link to={`/category/${category.id}`}> {category.name} </Link>

                </p> )
            }
        </div>
    );
};

export default ProductCategory;