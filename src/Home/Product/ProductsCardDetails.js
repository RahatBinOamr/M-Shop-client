import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsCardDetails = () => {
  const phonesDetails = useLoaderData();
  const { title, img, pre_price, res_price, details,location,seller,used} = phonesDetails;
  console.log(phonesDetails);
  return (
    <div className="card w-auto lg:card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <div className="w-full rounded">
          <img src={img} alt=""/>
        </div>
      </figure>
      <div className="card-body w-96">
        <h2 className="card-title">{title} </h2>
        <p className="font-semibold">Orginal Price: ${pre_price} </p>
        <p className="font-semibold">Recent Price: ${res_price} </p>
        <p className="font-semibold">Location: {location} </p>
        <p className="font-semibold">Seller: {seller} </p>
        <p className="font-semibold">Used: {used} </p>
        <p>{details} </p>
        <div className="card-actions justify-end">
          <Link to="/">
            <button className="btn btn-outline btn-warning">
              Back To Home
            </button>
          </Link>
          <button className="btn btn-outline btn-warning">By Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardDetails;
