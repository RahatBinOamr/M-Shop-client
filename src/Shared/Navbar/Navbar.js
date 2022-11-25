import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/banner/images.jpg"


const Nabvar = () => {
  const ManuIteam = <>
   <li className='font-semibold'> <Link to='/'> Home</Link> </li>
   <li className='font-semibold'> <Link to='/allproducts'> All Products</Link> </li>
   
  
  </>
  
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {ManuIteam}
      </ul>
    </div>
    <img className="rounded-full" style={{width:'50px', height:'50px' }} src={img} alt=""/>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Used Mobile</Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {ManuIteam}
    </ul>
  </div>
  <div className="navbar-end">
    <Link clssName="btn ">Get started</Link>
  </div>
</div>
  );
};

export default Nabvar;
