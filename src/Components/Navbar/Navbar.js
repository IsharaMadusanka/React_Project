import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState("shop"); 

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo'/>
        <p>SHOPME</p>
      </div>
     
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{textDecoration:'none'}}>kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
      </ul>
    
      <div className='nav-login-cart'>
        <Link to='/login' style={{textDecoration:'none'}}><button>Login</button></Link>
        <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt='cart_icon'/></Link>
        <div className='nav-counter'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
