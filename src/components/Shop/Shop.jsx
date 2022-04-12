import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, getStoredCart } from '../Utilities/fakedb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([])

useEffect( () =>{
    console.log('API called ')
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data =>{ 
        setProducts(data)
        setDisplayProduct(data)
    });
}, [])

useEffect( () => {
    console.log('localStorage called')
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product =>product.key === key)
                
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)
        }
    
}, [products])

            const handleAddToCart = (product) =>{
            const newCart = [...cart, product];
             addToDb(product.key);
            setCart(newCart);
    }

    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProducts);
    }
    return (
        <div>
            <div className='search-container'>
            <input 
            type="text" 
            onChange={handleSearch}
            className='search-product' 
            placeholder='Search product'></input>
            </div>
            <div className='shop'>
            <div className="product-container">
                                {
                    displayProduct.map(product => <Product  
                        key={product.key}
                        product={product}
                        handleAddToCart ={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-containr">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
        
    );
};

export default Shop;