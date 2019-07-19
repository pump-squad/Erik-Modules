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
    var first50 = this.props.products.slice(0, 24);
    return (
      <div className="results">
        {first50.map((product, i) => (
          <SearchItem product={product} key={i} />
        ))}
      </div>
    )
  }
}

export default SearchResults;