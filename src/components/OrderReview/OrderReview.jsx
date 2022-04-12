import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './OrderReview.css'
const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);    
    return (
        <div className='review'>
            <div className='productContainer'>
                <div className='cart-item-heading'>
                        <p>Picture</p>
                        <p>Name</p>
                        <p> Quantity</p>
                        <p>Price</p>
                </div>
            {
                cart.map(product => <ReviewItems product={product}></ReviewItems>)
            }
           
        </div >
        <div className='cartContainer'> <Cart cart={cart}></Cart></div>
        </div>
    );
};

export default OrderReview;