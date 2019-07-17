import React from 'react';

const MensDropdown = (props) => (
  <div className="dropdown">
    <ul>
      <li className="dropMenuTitle dropItem">CLOTHING</li>
      <li className="dropItem">Shell Jackets</li>
      <li className="dropItem">Insulated Jackets</li>
      <li className="dropItem">Pants</li>
      <li className="dropItem">Mid Layer & Fleece</li>
      <li className="dropItem">Base Layer</li>
      <li className="dropItem">Shirts & Tops</li>
      <li className="dropItem">Shorts</li>
    </ul>

    <ul>
      <li className="dropMenuTitle dropItem">PACKS</li>
      <li className="dropItem">Daypacks</li>
      <li className="dropItem">Multi-day</li>
      <li className="dropItem">Avalance Airbags</li>
      <li className="dropItem">Hydration Vests</li>
      <li className="dropItem">Duffle & Totes</li>
      <li className="dropItem">Travel Bags</li>
      <li className="dropItem">Commuter Bags</li>
    </ul>
      <ul>
        <li className="dropMenuTitle dropItem">FOOTWEAR</li>
        <li className="dropItem">Boots</li>
        <li className="dropItem">Shoes</li>
      </ul>
      <ul>
        <li className="dropMenuTitle dropItem">CLIMBING GEAR</li>
        <li className="dropItem">Harnesses</li>
        <li className="dropItem">Rope Bags</li>
        <li className="dropItem">Chalk Bags</li>
      </ul>
    <ul>
      <li className="dropMenuTitle dropItem">ACCESSORIES</li>
      <li className="dropItem">Gloves</li>
      <li className="dropItem">Toque & Beanies</li>
      <li className="dropItem">Pants</li>
      <li className="dropItem">Hats & Caps</li>
      <li className="dropItem">Product Care</li>
      <li className="dropItem">More...</li>
    </ul>
    {/* divider goes here */}
    <ul>
      <li className="dropMenuTitle dropItem">INTENDED USE</li>
      <li className="dropItem">Alpinism & Climbing</li>
      <li className="dropItem">Hiking & Trekking</li>
      <li className="dropItem">Skiing & Snowboarding</li>
      <li className="dropItem">Trail Running</li>
      <li className="dropItem">Lifestyle</li>
      <li className="dropItem">Arc'teryx Essentials</li>
    </ul>
    {/* divider goes here */}
    <ul>
      <li className="dropMenuTitle dropItem">SHOP MORE</li>
      <li className="dropItem">Rock Solid Used Gear</li>
      <li className="dropItem">Spring Lookbook</li>
      <li className="dropItem">New Arrivals</li>
      <li className="dropItem">Arc' Favourites</li>
      <li className="dropItem">Jacket Finder</li>
      <li className="dropItem">Layering Guide</li>
      <li className="dropItem">Travel & Commute</li>
      <li className="dropItem">Guide Picks</li>
      <li className="dropItem">Veilance</li>
      <li className="dropItem">Gift Cards</li>
    </ul>
    {/* <img></img> */}
  </div>
)

export default MensDropdown;