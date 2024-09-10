import React from 'react'
import './ProductDate.css';

const ProductDate = (props) => {

    

    const date = new Date(props.date); // Ensure props.date is a Date object

const month = date.toLocaleString('en-US', { month: 'long' });
const day = date.toLocaleString('en-US', { day: '2-digit' });
const year = date.getFullYear();

  return (
    <div className='product-date'>
        <div className='product-date_month'>{month}</div>
        <div className='product-date_year'>{year}</div>
        <div className='product-date_day'>{day}</div>
        </div>
  )
};

export default ProductDate;