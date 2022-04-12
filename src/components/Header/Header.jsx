import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'
const Navbar = () => {
    return (
        <div>
              <header className='navbar'>
        <div className='navbar__logo navbar__item'>
            <img src={logo} alt="" />
        </div>

       
           <div className='element-list'>
               <a href='/shop'><li>Shop</li></a>
               <a href='/review'><li>Order Rview</li></a>
               <a href='/inventory'><li>Inventory</li></a>
                
                </div>
         

       <div className='cart-and-notfi'>
            <div className='navbar__item'>Cart</div>
            <div className='navbar__item'>Notification</div>    
       </div>

    </header>
        </div>
    );
};

export default Navbar;