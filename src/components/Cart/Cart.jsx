import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}  = props
    let total = 0;
    let  totalQuantity = 0
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    let vat = total*.05;
    let T = total.toFixed(2)
    let VT = vat.toFixed(2)
    let delevary = total > 0? 45 : 0;
    let grandTotal  = total + vat + delevary;
    let GT = grandTotal.toFixed(2);
    return (
        <div>
                   <h1>My Cart</h1>
                <h3>Added Product: {totalQuantity}</h3>
                <h3>Total: {T} tk</h3>
                <h4>VAT: {VT} </h4>
                <h4>Shipping: {delevary}</h4>
                <h3>Grand Total : {GT}</h3>

        </div>
    );
};
 
export default Cart;