import React from 'react'
import './NewProduct.css';
import ProductForm from './ProductForm';
import { flushSync } from 'react-dom';

const NewProduct = (props) => {

  function saveproduct(product){
    console.log("i am inside new product")
    console.log(product);

    //calling parent function
    props.printproduct(product);
  }

  return (
    <div className="new-product">
      <ProductForm onsaveproduct={saveproduct}/>
      </div>
  )
}

export default NewProduct