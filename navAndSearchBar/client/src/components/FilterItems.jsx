import React from 'react';






class FilterItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    var filter = e.target.innerText.split(" (")[0];
    var activeIndex = this.state.active.indexOf(filter);
    if (activeIndex > -1) {
      var newActives = [...this.state.active];
      newActives.splice(activeIndex, 1);
      this.setState({
        active: newActives
      }, () => {
        this.props.removeFilter(this.props.category, filter);
      });
    } else {
      this.setState({
        active: [filter, ...this.state.active]
      })
      this.props.addFilter(this.props.category, filter);
    }
  }

  render() {
    return (
      <div className="filterList">
        {this.props.filters.map((filter, i) => {
          if (this.state.active.includes(filter)) {
            return (
              <div key={i} onClick={this.handleClick} className="individualFilter activeFilter">
                {filter} ({this.props.counts[filter]}) <i className="removeFilter fas fa-times"></i>
              </div>
            )
          } else {
            return (
              <div key={i} onClick={this.handleClick} className="individualFilter">
                {filter} ({this.props.counts[filter]})
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default FilterItems;