import React from 'react'
import { assets } from '../assets/assets'


const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
    <div>
      {/*--image container---*/}

      <div>
        {/* left side */}

        <div>
          <p>Orignal</p>
          <img src={assets.image_w_bg} alt="" />
        </div>

        {/* right side */}

        <div>
          <p>Background remove</p>
          <div>
            <img src={assets.image_wo_bg} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Result