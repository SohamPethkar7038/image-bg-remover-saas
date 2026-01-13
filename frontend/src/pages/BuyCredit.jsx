import React from 'react'
import Footer from '../components/Footer'
import { assets, plans } from '../assets/assets'
import { DiBackbone } from 'react-icons/di'
const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</h1>

      {/* plans */}
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item,index)=>(
          <div className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 border-none hover:scale-105 transition-all duration-500' key={index}>
            <img width={40} src={assets.logo_icon} alt="" />
            <p>{item.id}</p>
            <p>{item.desc}</p>
            <p>
              <span>${item.price}</span>/ {item.credits} credits
              </p>
              <button>Purchasef</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default BuyCredit