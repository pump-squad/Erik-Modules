import React from 'react';
import getProducts from '../lib/getProductsAndCounts.js';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import Filters from './Filters.jsx';
import Navbar from './Navbar.jsx';
import Buttons from './HeaderButtons.jsx';


import filter from '../lib/filter.js';
import counter from '../lib/countInEachCategory.js';
import filterMaker from '../lib/filterMaker.js';

const path = "/Users/erikgrubbs/hackReactor/Arc/Erik-Modules" // local
// https://arcteryxsearchclone.s3-us-west-1.amazonaws.com // s3

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      filters: {},
      counts: {},
      searchOpen: false,
      searchActive: false,
    };
    this.search = this.search.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
    this.activateSearch = this.activateSearch.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  search(term) {
    getProducts(term)
      .then(({ products, filters, counts }) => {
        this.setState({
          filteredProducts: products,
          products,
          filters,
          counts
        }, () => this.activateSearch())
      })
  }

  openSearch() {
    this.setState({
      searchOpen: true
    });
  }

  closeSearch() {
    this.setState({
      searchOpen: false
    });
  }

  activateSearch() {
    this.setState({
      searchActive: true
    })
  }

  filterProducts(config) {
    var filteredProducts = filter(this.state.products, config);
    var newFilters = filterMaker(filteredProducts);
    var newCounts = counter(filteredProducts, newFilters);
    this.setState({
      filteredProducts,
      filters: newFilters,
      counts: newCounts
    })
  }


  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="logo">
            <img id="logoImg" src={path + "/Assets/logo.png"}></img>
          </div>
          <nav className="navBar">
            <Navbar showDropdown={this.showDropdown} hideDropdown={this.hideDropdown} />
          </nav>
          <Buttons openSearch={this.openSearch} />
        </div>
        {this.state.searchOpen ?
          <div className="search">
            <SearchBar activateSeach={this.activateSearch} closeSearch={this.closeSearch} search={this.search} />
            <Filters filterProducts={this.filterProducts} searchActive={this.state.searchActive} products={this.state.products} filters={this.state.filters} counts={this.state.counts} />
            <SearchResults products={this.state.filteredProducts} />
          </div>
          : null}
      </div>
    )
  }

}




export default App;