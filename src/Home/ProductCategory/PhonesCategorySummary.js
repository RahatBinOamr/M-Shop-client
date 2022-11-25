import React from "react";
import { Link } from "react-router-dom";

const PhonesCategorySummary = ({ phoneCategory }) => {
  console.log(phoneCategory);
  const { title, img, pre_price, res_price, _id } = phoneCategory;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>preVious Price: ${pre_price} </p>
          <p>Recent Price: ${res_price} </p>
          <div className="card-actions justify-end">
            <Link to={`/phones/${_id}`}>
              <button className="btn btn-outline btn-warning">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesCategorySummary;
