import { format } from "date-fns";
import React from "react";

const BYNowModal = ({title,selectedDate,res_price}) => {
    const date = format(selectedDate,"PP")
    const handelModal = (e)=>{
        e.preventDefault()
        const form = e.target;
        // const date = form.date.value;
        const price = form.price.value
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(name,email,phone,date,price)
        const byNow ={
            title:title,
            price,
            date,
            name,
            email,
            phone
        }
        console.log(byNow);
    }
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           {title}
          </h3>
          <form onSubmit={handelModal}>
          <input name="date" type="text" defaultValue={date} disabled className="input input-bordered input-warning w-full mt-3 " />
          <input name="price" type="text" defaultValue={`price:$${res_price}`} disabled className="input input-bordered input-warning w-full mt-3 " /> 
          <input name="name" type="text" placeholder="Your Name" className="input input-bordered input-warning w-full mt-3 " />
          <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-warning w-full mt-3 " />
          <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-warning w-full mt-3 " />
          
          <input type="submit" className="btn btn-warning mt-3 w-full" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BYNowModal;
