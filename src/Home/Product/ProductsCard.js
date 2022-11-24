import React from "react";

const ProductsCard = ({ product }) => {
    const {title,img,pre_price,res_price,details}=product
  console.log(product.res_price);
  
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
            <div className="badge badge-outline">details</div>
            <div className="badge badge-outline">sell</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
