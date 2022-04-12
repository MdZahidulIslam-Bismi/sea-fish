import React from 'react';
import './ReviewItem.css'
const ReviewItems = (props) => {
    const {name, img, price, quantity} = props.product;

    return (
        <div className='cartProduct'>
            <img className='cart-img' src={img} alt=''></img>
            <h6 className='cart-name'>{name}</h6>
            <h6 className='cart-quantity'>{quantity}</h6>
            <h6 className='cart-price'>{(price*quantity).toFixed(2)}</h6>
            <button className='btn-remove'> Remove </button>
        </div>
    );
};

export default ReviewItems;