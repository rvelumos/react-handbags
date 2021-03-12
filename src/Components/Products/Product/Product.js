import React from 'react';
import classes from './Product.css';

const Product = (props) => {
    return(
        <article className={classes.Product}>
            <span>{props.label}</span>
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <h4>{props.price}</h4>
        </article>
    )
}

export default Product;