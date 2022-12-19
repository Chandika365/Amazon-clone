import React from "react";
import "./CheckoutProduct.css";
import { UseStateValue } from "./StateProvider";

//this checkout product display checkout products when click add to basket button

function checkoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = UseStateValue();

  const removeFromBasket = () => {
    // remove items from the bascket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="checkoutProduct">
        <img className="checkoutproduct-image" src={image} />
      </div>
      <div className="checkoutproduct-info">
        <p className="checkoutproduct-title">{title}</p>
        <p className="checkoutproduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct-ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </>
  );
}

export default checkoutProduct;
