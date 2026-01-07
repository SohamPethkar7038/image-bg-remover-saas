
import React from "react";
import { useState } from "react";
import {assets} from '../assets/assets.js'


const BgSlide = () => {
    const [sliderPostion,setSliderPosition]=useState(50)

    const handleSliderChange=(e)=>{
        setSliderPosition(e.target.value);
    }
  return (
    <div className='pb-12 md:py-20 px-3 sm:px-4 ' >
        {/* title */}
        <h1 className='mb-12 sm:mb-12 text-center text-2xl md:text-3xl lg:text-4xl mt-3 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br/> Quality and Accuracy </h1>

        <div className='relative w-full max-w-3xl lg:max-w-xl xl:max-w-xl  overflow-hidden m-auto rounded-xl'>
            {/* background image */}
            <img src={assets.image_w_bg} className="w-full h-full " style={{clipPath:`inset(0 ${100.2-sliderPostion}% 0 0)`}} alt="" />

            {/* foreground image */}

            <img className='absolute top-0 left-0 w-full h-full   ' src={assets.image_wo_bg}  style={{clipPath:`inset(0 0 0 ${sliderPostion}%)`}} alt="" />

            {/* slider */}
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPostion} onChange={handleSliderChange} />

            
        </div>
       </div>
    
  )
}

export default BgSlide

