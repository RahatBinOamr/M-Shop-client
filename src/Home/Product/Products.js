import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://used-mobile-server.vercel.app/phones`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //    console.log(products)
  <Loading></Loading>
  let count =0;
  count = count+1;
  return (
    <div className="basis-full ">
      <div className="text-center mb-4">
        
        <h2 className="text-5xl font-semibold">Our <span className="text-warning">Phones</span></h2>
        <p>
          They come in use for communicating through voice, messages, and mails.
          We can also surf the internet using a phone. Most importantly, we also
          click photos and record videos through our mobile's camera. The phones
          of this age are known as smartphones{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {
            products.map(product=>{
                count = count + 1;
                if (count <= 7){
                    return (
                        <div>
                            <ProductsCard key={product._id} product={product}></ProductsCard>
                        </div>
                    )
                }
            })
        }
      </div>
      <Link className="mt-10" to='/allproducts'><button className="btn btn-warning">Show More</button></Link>
    </div>
  );
};

export default Products;
