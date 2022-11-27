import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const [report,setReport]=useState(null)
    const {title,img,pre_price,res_price,_id,location }=product
//   console.log(product.res_price);
  const handelReport = ()=>{
    fetch(`https://used-mobile-server.vercel.app/report`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(report)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      toast.success('report successfully')
    })
  }
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
          <p className="font-semibold">Orgenial Price: ${pre_price}  </p>
          <p className="font-semibold">Recent Price: ${res_price}  </p>
          <p className="font-semibold">Location: {location}  </p>
          <div className="card-actions justify-end">
          <Link  to={`/phones/${_id}`}><button className="btn btn-outline btn-warning">Details</button></Link>
          <button onFocus={()=>setReport(product)} onClick={handelReport} className="btn btn-primary"> Report</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
