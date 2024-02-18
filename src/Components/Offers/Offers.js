import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt='exclusive_image'/>
        </div>
      
    </div>
  )
}

export default Offers