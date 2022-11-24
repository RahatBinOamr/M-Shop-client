import React, { useState } from "react";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import LInk from "./LInk";

const Nabvar = () => {
  const [open, setOpen] = useState(false);
  const raouts = [
    { id: 1, name: "Home", path: "./Home" },
    { id: 2, name: "Product", path: "./Product" },
    { id: 3, name: "Order", path: "./Order" },
    { id: 4, name: "Contact ", path: "./Contact" },
    { id: 5, name: "About", path: "./About" },
  ];
  return (
    <div className="bg-cyan-400 w-full">
      <div className="navbar ">
        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`bg-cyan-400 w-full md:flex justify-center absolute md:static duration-500 ease-in ${
            open ? "top-6" : "top-[-180px]"
          }`}
        >
          {raouts.map((raout) => ( 
            <LInk key={raout.id} raout={raout}></LInk>
          ))}
        </ul>
      </div >
    </div>
  );
};

export default Nabvar;
