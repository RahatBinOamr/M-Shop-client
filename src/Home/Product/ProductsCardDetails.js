import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductsCardDetails = () => {
  const phonesDetails = useLoaderData();
  const { title, img, pre_price, res_price, details } = phonesDetails;
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
        <p>preVious Price: ${pre_price} </p>
        <p>Recent Price: ${res_price} </p>
        <p>{details} </p>
        <div className="card-actions justify-end">
          <Link to="/">
            <button className="btn btn-outline btn-warning">
              Back To Home
            </button>
          </Link>
          <button className="btn btn-outline btn-warning">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardDetails;
