import React from 'react';

const ExploreDropdown = (props) => (
  <div className="dropdown">
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
</div>
)

export default ExploreDropdown;