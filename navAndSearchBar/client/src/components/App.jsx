import React from 'react';
import getProducts from '../lib/getProductsAndCounts.js';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filters: {},
      counts: {}
    };
    this.search = this.search.bind(this);
  }

  search(term) {
    getProducts(term)
      .then(({ products, filters, counts }) => {
        this.setState({
          products,
          filters,
          counts
        })
      })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="search">
        <SearchBar search={this.search} />
        <SearchResults products={this.state.products} filter={this.state.filters} counts={this.state.counts} />
      </div>
    )
  }

}




export default App;