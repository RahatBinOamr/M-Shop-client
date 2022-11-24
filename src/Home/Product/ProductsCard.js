import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
    const {title,img,pre_price,res_price,_id}=product
//   console.log(product.res_price);
  
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img style={{height:'250px'}} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            
          </h2>
          <p>preVious Price: ${pre_price}  </p>
          <p>Recent Price: ${res_price}  </p>
          <div className="card-actions justify-end">
          <Link to={`/phones/${_id}`}><button className="btn btn-outline btn-warning">Details</button></Link>
          <button className="btn btn-outline btn-warning">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
