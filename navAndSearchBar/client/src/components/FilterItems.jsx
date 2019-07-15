import React from 'react';






const FilterItems = (props) => {

  const handleClick = (e) => {
    props.addFilter(props.category, e.target.innerText);
  }

  return (
    <div className="filterList">
      {props.filters.map((filter, i) => (
        <div key={i} className="indidualFilter">
          <span onClick={handleClick}>{filter}</span>
          <span> ({props.counts[filter]})</span>
        </div>
      ))}
    </div>
  )
}

export default FilterItems;