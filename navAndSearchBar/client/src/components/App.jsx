import React from 'react';
import getProducts from '../lib/getProductsAndCounts.js';


class App extends React.Component  {
  constructor (props) {
    super(props)
    this.state ={
      products: [],
      filters: {},
      counts: {}
    };
    this.search = this.search.bind(this);
  }

  search(term) {
    getProducts(term)
      .then(({products, filters, counts})=> {
        this.setState({
          products,
          filters,
          counts
        })
      })
  }

  componentDidMount() {

  }

  render () {
    return (
      <div>React Workin'</div>
    )
  }

}




export default App;