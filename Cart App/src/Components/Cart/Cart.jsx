import React, {useContext} from 'react';
import {ProductContext} from '../../Context/Product-Context';

const Cart = props =>{
    const cartItems = useContext(ProductContext).products.filter(p=>p.isCartItem)
    var totalAmount=0;
    for(let i=0; i<cartItems.length;i++)
        totalAmount += cartItems[i].price
    console.log(cartItems);

  return (
    <React.Fragment>
            <h3>Cart Item</h3>
            <nav>
                <ul>
                    {
                        cartItems.map(item=><li key={item.id}><h5>{item.title} :<span>$ {item.price}</span></h5></li>)
                    }
                </ul>
                <h5>Total :{totalAmount}</h5>
            </nav>
        </React.Fragment>
  )
}

export default Cart