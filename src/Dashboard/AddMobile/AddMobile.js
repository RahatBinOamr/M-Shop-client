import React from "react";

const AddCard = () => {
    const handelForm = (e)=>{
        e.preventDefault()
        const form = e.target;
        const phone = form.phone.value;
        const oPrice = form.oPrice.value;
        const rPrice = form.rPrice.value;
        const location = form.location.value;
        const id = form.id.value;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        console.log(phone,oPrice,rPrice,location,id,name,img,details);
    }
  return (
    <div>
      <h2 className="text-xl font-semibold">Add Mobile</h2>
      <div className="w-1/2 mt-10">
        <form onSubmit={handelForm} className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
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
            placeholder="Id (01-05)This type"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
          name="name"
            type="text"
            placeholder="Seller Name"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          <input
          name="img"
            style={{ width: "500px" }}
            type="text"
            placeholder="img"
            className="input input-bordered input-warning w-full max-w-xs"
          />{" "}
          <br />
          <textarea
          name="details"
            style={{ width: "480px" }}
            className="textarea textarea-bordered h-60 "
            placeholder="Details"
          ></textarea>{" "}
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
