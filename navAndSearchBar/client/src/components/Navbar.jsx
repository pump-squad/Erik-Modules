import React from 'react';
import MensDropdown from './MensDropdown.jsx';
import WomensDropdown from './WomensDropdown.jsx';
import ExploreDropdown from './ExploreDropdown.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menu: ""
    }
    this.showDropdown=this.showDropdown.bind(this);
    this.hideDropdown=this.hideDropdown.bind(this);
  }

  showDropdown(e) {
    var menu = e.target.innerText;
    this.setState({
      showMenu: true,
      menu
    })
  }

  hideDropdown() {
    this.setState({
      showMenu: false
    });
  }

  render() {
    return (
    <ul onMouseLeave={this.hideDropdown}>
      <li className="navOption" onMouseEnter={this.showDropdown}><a className="navOptionText" href="/c/mens">MENS</a></li>
      <li className="navOption" onMouseEnter={this.showDropdown} ><a className="navOptionText" href="/c/mens">WOMENS</a></li>
      <li className="navOption" onMouseEnter={this.showDropdown} ><a className="navOptionText" href="/c/mens">EXPLORE</a></li>
      {this.state.showMenu && this.state.menu === "MENS" && <MensDropdown/>}
      {this.state.showMenu && this.state.menu === "WOMENS" && <WomensDropdown/>}
      {this.state.showMenu && this.state.menu === "EXPLORE" && <ExploreDropdown/>}
     </ul>
    )}
}

export default Navbar;