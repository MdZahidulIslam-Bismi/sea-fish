import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {pro} = useParams();
  console.log(pro)
  const {product, setProduct} = useState({})
  // console.log(product)
  
  useEffect( () =>{
   
    
    fetch(`./products.JSON/${pro}`)
    .then(res => {
      
    })
    .then(data => console.log(data))
}, [])
  return (
    <div>
      <h3>Hello description : {pro}</h3>
      {/* <h4>{product.name}</h4> */}
    </div>
  );
};

export default ProductDetail;