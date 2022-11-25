import React from "react";

const BYNowModal = ({title}) => {
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
          <form >
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mt-3 " />
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mt-3 " />
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mt-3 " />
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mt-3 " />
          <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full mt-3 " /> 
          <input type="submit" className="btn btn-warning mt-3 w-full" value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BYNowModal;
