import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

// npm install react-currency-format --save --force  use to install react currency format

function Subtotal() {

  // checkout page add to basket item no, and price
  const [{basket}, dispatch] = UseStateValue();


  return (
    <div className='subtotal'>
        {/* this line of code i dont understand  */}
        <CurrencyFormat
            renderText={(value) =>(
                <>
                    <p>
                        Subtotal ({basket.length}): <strong>{value}</strong>
                    </p>
                        <small className='subtotal-gift'>
                                <input type="checkbox" /> This order contain a gift
                        </small>
                </>
            )}
            // decimal scale means last price value number of decimals
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button className="checkout-button">
            Proceed to Checkout
            </button>
    </div>
  )
}

export default Subtotal