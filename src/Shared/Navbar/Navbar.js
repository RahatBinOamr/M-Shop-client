import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/banner/images.jpg";
import { AuthContext } from "../../Context/AuthProvider";
import ProductCategory from "../../Home/ProductCategory/ProductCategory";

const Nabvar = () => {
  const { user, logOut } = useContext(AuthContext);
  const ManuIteam = (
    <>
      <li className="font-semibold">
        {" "}
        <Link to="/"> Home</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/allproducts"> All Products</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/blog"> Blog</Link>{" "}
      </li>
      <li className="font-semibold">
        {" "}
        <Link to="/dashboard"> Dashboard</Link>{" "}
      </li>
      {user?.uid ? (
        <>
          {" "}
          <button onClick={logOut} className="btn btn-warning btn-xs">
            Log OUt
          </button>{" "}
        </>
      ) : (
        <>
          <li className="font-semibold">
            {" "}
            <Link to="/login">Login</Link>{" "}
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {ManuIteam}
          </ul>
        </div>
        <img
          className="rounded-full"
          style={{ width: "50px", height: "50px" }}
          src={img}
          alt=""
        />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
           <span className="text-warning font-bold text-xl">M</span> -Shop
        </Link>
      </div>
     
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{ManuIteam}</ul>
      </div>
      <div>
    <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost    lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      
    </div>
    </div>
  );
};

export default Nabvar;
