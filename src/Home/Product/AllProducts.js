import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/phones`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
        </div>
    );
};

export default AllProducts;