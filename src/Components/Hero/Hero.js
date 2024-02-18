import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'

function Hero() {
  return (
    <div>
    <div className='hero'> 
        <div className='hero-left'>
            <h2>NEW ARRIVALS</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>New</p>
                    <img src={hand_icon} alt='hand_icon'/>
                </div>
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
            <div className='hero-laterst-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt='arrow_icon'/>
        </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt='hero_img'/>
        </div>
        
        
    </div>
    
    </div>
  )
}

export default Hero
