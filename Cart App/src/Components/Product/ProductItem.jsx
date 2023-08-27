import React, {useContext} from 'react';
import classes from './Product.module.css';
import {ProductContext} from '../../Context/Product-Context';

const ProductItem = props =>{
    const toggleCart = useContext(ProductContext).toggleCart
    const toggleFavHandler = () => {
        toggleCart(props.id);
      };
  return (
    <div className={classes.Card}>
            <img src={props.images} alt="Denim Jeans" style={{width:"100%"}} />
            <h1>{props.title}</h1>
            <p className={classes.Price}>${props.price}</p>
            <p>{classes.decription}</p>
            <p><button onClick={toggleFavHandler}>{props.isCartItem ? 'Remove Item' : 'Add to Cart'}</button></p>
        </div>
  )
}

export default ProductItem;