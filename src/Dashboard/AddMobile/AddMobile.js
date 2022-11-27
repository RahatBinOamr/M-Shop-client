import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../Hook/UseTitle";

const AddCard = () => {
  useTitle('AddMobile')
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_ibb_key;
    console.log(imageHostKey);
  const handelForm = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const phone = form.phone.value;
    const oPrice = form.oPrice.value;
    const rPrice = form.rPrice.value;
    const location = form.location.value;
    const id = form.id.value;
    const name = form.name.value;
    const used = form.used.value;
    const img = form.img.value;
    const details = form.details.value;
    // console.log(phone, oPrice, rPrice, location, id, name, img, details);
    const phones = {
      pre_price: oPrice,
      res_price: rPrice,
      location,
      seller: name,
      title: phone,
      category_id: id,
      img,
      details,
      used,
    };
    console.log(phones)
    fetch(`https://used-mobile-server.vercel.app/phoneAdd`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify(phones),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate('/')
        toast.success('Add Mobile Successfully')
      }
      console.log(data);
    });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold rounded-sm">Add Mobile</h2>
      <div className="w-full lg:w-1/2 items-center mt-10 bg-base-200 shadow-xl p-10 m-10 ">
        <form
          onSubmit={handelForm}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <input
            name="phone"
            type="text"
            required
            placeholder="Phone Name or Model"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="oPrice"
            type="text"
            required
            placeholder="Orginal Price"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="rPrice"
            type="text"
            required
            placeholder="Recent Price"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="location"
            type="text"
            required
            placeholder="Location"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="id"
            type="text"
            required
            placeholder="
            
            category_id (01-05)This type"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="name"
            required
            type="text"
            placeholder="Seller Name"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="used"
            type="text"
            required
            placeholder="Used"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="img"
            type="text"
            required
           placeholder="img"
            className="input input-bordered input-warning w-full max-w-xs"
          />{" "}
          
          <div>
          <textarea
            name="details"
            required
            style={{ width: "400px" }}
            className="textarea textarea-bordered h-60 "
            placeholder="Details"
          ></textarea>{" "}
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-warning w-full"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCard;
