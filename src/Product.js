import React from "react";
import "./Product.css";
import { UseStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


// use some props
function Product({id, title, image, price, rating}) {
     const [{basket}, dispatch] = UseStateValue();

     //dispatch means how we manipulate the data 

     const addToBasket = () =>{
      //dispatch the items in to the data layer
        
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
     }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-ratings">
          {Array(rating)
          .fill().map((_, i) => (
            <p>🌟</p>
          ))}
          
        </div>
      </div>
      <img
        src={image}
        alt=""
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
