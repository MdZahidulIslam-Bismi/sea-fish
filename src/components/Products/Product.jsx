import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
       const { key,name, price, img} = props.product;
       const element = <FontAwesomeIcon icon={faShoppingCart}/>
       const url = `/product/${key}`;
    return (
        <div className='product'>
            <div>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-property'>
            <div>
            <p className='productName'>{name} </p>    
            </div>               
           <div className='size-price'>
           <p>
            <strong><select>
            <option value="0">Size:</option>
            <option value="1">small</option>
            <option value="2">Midium</option>
            <option value="3">Large</option>
            </select> </strong>
            </p>
            <p>
            <strong>Price:{price} </strong>
            </p>
            
           </div>
           
            <div className='button'>
                <button 
                onClick={() => props.handleAddToCart(props.product)}
                className='cart-button' > {element}Add to Cart</button>
                <button className='order-button'>Order Now</button>
            </div>
            <Link to={url}>click me</Link>
            </div>
            </div>
            </div>
        
    );
};

export default Product;