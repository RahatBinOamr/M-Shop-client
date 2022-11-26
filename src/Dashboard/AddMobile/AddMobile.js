import React from "react";
import { useNavigate } from "react-router-dom";

const AddCard = () => {
    const navigate = useNavigate()
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
    fetch(`http://localhost:5000/phoneAdd`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(phones),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        navigate('/')
      }
      console.log(data);
    });
  };
  
  return (
    <div>
      <h2 className="text-xl font-semibold">Add Mobile</h2>
      <div className="w-1/2 mt-10">
        <form
          onSubmit={handelForm}
          className=" grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <input
            name="phone"
            type="text"
            placeholder="Phone Name or Model"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="oPrice"
            type="text"
            placeholder="Orginal Price"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="rPrice"
            type="text"
            placeholder="Recent Price"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="id"
            type="text"
            placeholder="
            category_id (01-05)This type"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="name"
            type="text"
            placeholder="Seller Name"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="used"
            type="text"
            placeholder="Used"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
            name="img"
            type="text"
            placeholder="img"
            className="input input-bordered input-warning w-full max-w-xs"
          />{" "}
          
          <div>
          <textarea
            name="details"
            style={{ width: "480px" }}
            className="textarea textarea-bordered h-60 "
            placeholder="Details"
          ></textarea>{" "}
          </div>
          <br />
          <input
            type="submit"
            className="btn btn-outline btn-warning w-full"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCard;
