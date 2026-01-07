import React from 'react'
import { FaQuoteRight } from "react-icons/fa6";
import { assets } from '../assets/assets.js'
import { testimonialsData } from '../assets/assets.js'

const Testimonal = () => {
  return (
    <div>
      {/* ---title--- */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5'>
        Customer Testimonal
      </h1>

      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div className="
          flex
          gap-6
          mt-7
          sm:gap-8
          lg:gap-10
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          no-scrollbar
          px-4
          sm:px-6
          lg:px-10
          py-8
        ">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="
                snap-center
                shrink-0
                w-[90%]
                sm:w-[60%]
                md:w-[48%]
                lg:w-[32%]
              "
            >
              <div className="
                bg-white
                rounded-xl
                p-6
                drop-shadow-md
                hover:scale-[1.04]
                hover:shadow-xl
                transition-all
                duration-500
              ">
                <FaQuoteRight className='text-sm text-gray-500'/>
                <p className='text-sm text-gray-500'>{item.text}</p>

                <div className='flex items-center gap-3 mt-5'>
                  <img className='w-9 rounded-full' src={item.image} alt="" />
                  <div>
                    <p>{item.author}</p>
                    <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Testimonal
