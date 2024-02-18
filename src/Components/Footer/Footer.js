import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pinterest_icon from '../Assests/pintester_icon.png'
import whatsApp_icon from '../Assests/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            
            <img src={footer_logo} alt='footer_logo'/>
            <p>SHOPME</p>
        </div>

        <div className='footer-links'>
        <ul>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        </div>

        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
            <img src={instagram_icon} alt='instagram_icon'/>
            </div>

            <div className='footer-icon-container'>
            <img src={pinterest_icon} alt='pinterest_icon'/>
            </div>

            <div className='footer-icon-container'>
            <img src={whatsApp_icon} alt='whatsApp_icon'/>
            </div>
        </div>

        <div className='footer-copuright'>
            <hr/>
            <p>copyrigt @ 2024 - All</p>
        </div>

        
    </div>
  )
}

export default Footer
