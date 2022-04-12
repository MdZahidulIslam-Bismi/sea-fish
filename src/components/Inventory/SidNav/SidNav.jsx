import React from 'react';

const SidNav = () => {
    return (
        <div>
            <div className='element-list'>
               <a href='/shop'><li>Shop</li></a>
               <a href='/review'><li>Order Rview</li></a>
               <a href='/inventory'><li>Inventory</li></a>
                
                </div>
        </div>
    );
};

export default SidNav;