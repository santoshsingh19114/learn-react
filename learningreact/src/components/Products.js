import React from 'react';
import './Products.css';
import ProductItem from './ProductItem';
import Card from './Card';

const Products = (props) => {
  return (
    // <div className="products">
    <Card classes ="card-blue">
        <ProductItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
        <ProductItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        />
        <ProductItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        />
    </Card>
    // </div>
  )
}

export default Products