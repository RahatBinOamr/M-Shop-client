import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PhonesCategorySummary = ({ phoneCategory }) => {
  console.log(phoneCategory);
  const [report,setReport]=useState(null)
  const { title, img, pre_price, res_price, _id ,pNumber} = phoneCategory;
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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold">preVious Price: ${pre_price} </p>
          <p className="font-semibold">Recent Price: ${res_price} </p>
          <p className="font-semibold">Phone Number: {pNumber} </p>
          <div className="card-actions justify-end">
            <Link to={`/phones/${_id}`}>
              <button className="btn btn-outline btn-warning">Details</button>
            </Link>
            <button onFocus={()=>setReport(phoneCategory)} onClick={handelReport} className="btn btn-warning"> Report</button>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PhonesCategorySummary;
