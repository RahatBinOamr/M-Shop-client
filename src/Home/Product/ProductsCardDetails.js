
import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/UseTitle";
import BYNowModal from "../ByNow/BYNowModal/BYNowModal";

const ProductsCardDetails = () => {
  useTitle('CardDetails')
  const phonesDetails = useLoaderData();
  const { title, img, pre_price, res_price, details, location, seller, used,pNumber } =
    phonesDetails;
  console.log(phonesDetails);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <BYNowModal res_price={res_price}  selectedDate={selectedDate} title={title} ></BYNowModal>
   <div>
   <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    
                    <div className='mr-6 sm:w-full'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        {/* <p className= 'text-xl text-warning font-semibold'>you have selected data:{format(selectedDate,'PP')} </p> */}
                    </div>
                </div>
               
            </div>
              <p className='text-center text-secondary font-bold'>Available Date on {format(selectedDate, 'PP')}</p>
        </header>
   
   </div>
   
      <div className="card w-auto lg:card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <div className="w-full rounded">
            <img src={img} alt="" />
          </div>
        </figure>
        <div className="card-body w-96">
          <h2 className="card-title">{title} </h2>
          <p className="font-semibold">Orginal Price: ${pre_price} </p>
          <p className="font-semibold">Recent Price: ${res_price} </p>
          <p className="font-semibold">Location: {location} </p>
          <p className="font-semibold">Seller: {seller} </p>
          <p className="font-semibold">Used: {used} </p>
          <p className="font-semibold">Phone Number: {pNumber} </p>
          <p>{details} </p>
          <div className="card-actions justify-end">
            <Link to="/">
              <button className="btn btn-outline btn-warning">
                Back To Home
              </button>
            </Link>
            <label htmlFor="my-modal-3" className="btn btn-outline btn-warning">By Now</label>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCardDetails;
