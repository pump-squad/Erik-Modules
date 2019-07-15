import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: "",
      dropMenu: null
    }
  }

  render() {
    return (
    <ul>
      <li className="navOption"><a className="navOptionText" href="/c/mens">MENS</a></li>
      <li className="navOption"><a className="navOptionText" href="/c/womens">WOMENS</a></li>
      <li className="navOption"><a className="navOptionText" href="/explore">EXPLORE</a></li>
    </ul>
    )}
}

export default Navbar;