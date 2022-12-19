import React from "react";
import "./Header.css";
import searchIcon from "./icons/search-icon.png";
import shopingIcon from "./icons/shoping-basket.png";
import { Link } from 'react-router-dom';
import { UseStateValue } from "./StateProvider";


function Header() {
//   this use for display number of items add to basket
   const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header-logo"
        />
      </Link>

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-optionLineOne">Hello Guest</span>
            <span className="header-optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>

        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>

         <Link to="/checkout">
          <div className="header-optionbasket">
            <img className="header-shopingBasket" src={shopingIcon} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
