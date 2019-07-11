import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length) {
      this.props.search(e.target.value);
    }
  }

  render() {
    return (
      <div className="searchField">
        <input type="text" onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default SearchBar;