import React, {useContext} from 'react';
import {ProductContext} from '../../Context/Product-Context';
import ProductItem from './ProductItem';


    const Products = React.memo(props =>{
        const productList = useContext(ProductContext).products;
        console.log(productList);
        return (
            <React.Fragment>
                <h2 style={{textAlign:"center"}}>Product Card</h2>
                {productList.map(product=>(
                    <ProductItem 
                        key={product.id} 
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price = {product.price}
                        discountPercantage = {product.discountPercantage}
                        rating = {product.rating}
                        stock = {product.stock}
                        brand = {product.brand}
                        category = {product.category}
                        thumbnail = {product.thumbnail}
                        images={product.images}
                        isCartItem={product.isCartItem}
                    />
                ))}
            </React.Fragment>
        )
    })

export default Products