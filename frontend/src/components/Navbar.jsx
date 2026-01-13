import React from "react";
import { Link } from "react-router-dom";


import {assets} from '../assets/assets.js';


const Navbar=()=>{
    return(
        <div className="flex item-center justify-between mx-4 py-3 mt-3 lg:mx-25 ">
           <Link to='/'><img className="w-32 sm:w-44" src={assets.logo} alt="" /></Link> 
            <button className="bg-zinc-800 text-white flex item-center gap-4 px-4 py-2 sm:py-3 text-sm rounded-full">
                Get Started <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
            </button>
        </div>
    ) 
}

export default Navbar