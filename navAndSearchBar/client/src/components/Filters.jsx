

import React from 'react';
import FilterItems from './FilterItems.jsx';


class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genders: [],
      categories: [],
      activities: [],
      colors: [],
      materials: [],
      reviews: []
    }
    this.addFilter = this.addFilter.bind(this);
  }

  addFilter(category, filter) {
    this.setState({
      [category]: [filter, ...this.state[category]]
    }, () => {
      var config = Object.assign({}, this.state);
      // bad naming cleanup
      config.category = config.categories;
      config.gender = config.genders;
      config.rating = config.reviews;
      delete config.categories;
      delete config.genders;
      delete config.reviews;

      this.props.filterProducts(config);
    })
  }

  render() {  
   return ( 
      <div className="filters">
        {Object.keys(this.props.filters).map((category, i) => (
          <div className="filterCategory" key={i}>
            {category}
            <FilterItems addFilter={this.addFilter} category={category} filters={this.props.filters[category]} counts={this.props.counts}/>
          </div>
        ))}
      </div>
   );  
  }
}
export default Filters;