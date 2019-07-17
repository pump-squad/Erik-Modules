import React from 'react';
import SearchItem from '../components/SearchItem.jsx';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        activities: [],
        colors: [],
        category: [],
        gender: [],
        materials: [],
        rating: []
      },
      products: this.props.products
    };
  }


  render() {
    return (
      <div className="results">
        {this.props.products.map((product, i) => (
          <SearchItem product={product} key={i} />
        ))}
      </div>
    )
  }
}

export default SearchResults;