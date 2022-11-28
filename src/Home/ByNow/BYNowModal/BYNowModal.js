import { format } from "date-fns";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hook/UseTitle";

const BYNowModal = ({title,selectedDate,res_price}) => {
  useTitle('ByNowModal')
    const date = format(selectedDate,"PP")
    const {user}= useContext(AuthContext)
    const navigate=useNavigate()
    const handelModal = (e)=>{
        e.preventDefault()
        const form = e.target;
        // const date = form.date.value;
        const price = form.price.value
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // console.log(name,email,phone,date,price)
        const booking = {
           date: date,
           title:title,
            name: name,
          price,
          location,
            email,
            phone,
        }
        console.log(booking)
        fetch('https://used-mobile-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  
                    toast.success('Booking confirmed');
                    navigate('/dashboard')
                }
                else{
                    toast.error(data.message);
                }
            })
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
          <input name="price" type="text" defaultValue={res_price} disabled className="input input-bordered input-warning w-full mt-3 " /> 
          <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered input-warning w-full mt-3 " />
          <input name="name" type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-warning w-full mt-3 " />
          
          <input name="location" type="text" placeholder="Your location" className="input input-bordered input-warning w-full mt-3 " />
          <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-warning w-full mt-3 " />
          
          <input type="submit" className="btn btn-warning mt-3 w-full" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BYNowModal;
