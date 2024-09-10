import { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
    
    const[newtitle,setTitle]=useState('');
    const[newdate,setDate]=useState('');

 


    function titleChangeHandler(event){
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    
    

    function dateChangeHandler(event) {
        setDate(event.target.value); // Correct usage of setter
        console.log(event.target.value); // Optional, for debugging
      }


    function SubmitHandler(event){ 
      event.preventDefault();
      const productData= {
        title:newtitle,
        date:newdate
      };


      props.onsaveproduct(productData);
      // console.log(productData);


      setDate('');
      setTitle('');
    }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-product-title">
        <label> Title</label>
        <input type="text" value={newtitle} onChange={titleChangeHandler} ></input>
      </div>
      <div className="new-product-date">
        <label> date</label>
        <input type="date" value={newdate} min="2024-09-8" max="2024-09-8" onChange={dateChangeHandler} />
      </div>
      <div className="new-product-button">
        <button type='submit'>Add product</button>
      </div>
    </form>
  );
}

export default ProductForm;
