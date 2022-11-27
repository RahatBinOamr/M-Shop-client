import React, { useEffect, useState } from 'react';
import useTitle from '../../Hook/UseTitle';
import ProductsCard from './ProductsCard';

const AllProducts = () => {
  useTitle('AllProduct')
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`https://used-mobile-server.vercel.app/phones`)
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