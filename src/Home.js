import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home-image"
        />

        <div className="home-row">
          <Product
            id="20011010"
            title="Ikigai: The Japanese Secret to a Long and Happy Life "
            price={30.99}
            image="https://m.media-amazon.com/images/I/51oOobVQpkS._AC_UY218_.jpg"
            rating={4}
          />

          <Product
            id="20011012"
            title="NutriBullet ZNBF30500Z Blender Combo 1200 Watt, 1200W, Dark Gray"
            price={149.99}
            image="https://m.media-amazon.com/images/I/71mBa96btlL._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="20011013"
            title="BENYAR Classic Fashion Elegant Chronograph Watch Casual Sport Leather Band Mens Watches 5140L"
            price={31.99}
            image="	https://m.media-amazon.com/images/I/714l3VWd01L._AC_UX679_.jpg"
            rating={4}
          />
          <Product
            id="20011014"
            title="2023 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage."
            price={988.0}
            image="	https://images-na.ssl-images-amazon.com/images/I/31XzrHCTFjL._AC_SR400,600_.jpg"
            rating={5}
          />
          <Product
            id="20011015"
            title="SKDOIUL Men Sport Running Shoes Mesh Breathable Trail Runners Fashion Sneakers"
            price={39.99}
            image="https://m.media-amazon.com/images/I/81-v4SFRKYS._AC_UY500_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="20011016"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1666.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;