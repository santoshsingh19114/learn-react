import React ,{useState}from 'react'
import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  // let title=props.title;
  const[title,setTitle]=useState(props.title);


  function clickHandler(){
    setTitle("popcorn");
    console.log("button clicked")
  }


  return (
    
    <Card className=" product-item-card" >
        <ProductDate date={props.date}/>
        <div className='product-item-discription'>
            <h2>{title}</h2> 
        </div>
        <button onClick={clickHandler}>add to cart</button>
        </Card>
        
  );
}

export default ProductItem;