import React from 'react';

const WeaponFilter = ({ filterChange }) => {
  const onFilterChange = (event) => {
    filterChange(event.target.value);
  }
  return (
    <div>
      <form id="weaponFilter" >
        <select onChange={onFilterChange}>
          <option>all</option>
          <option>wind</option>
          <option>fire</option>
          <option>earth</option>
          <option>water</option>
          <option>dark</option>
          <option>light</option>
        </select>
      </form>
    </div>
  )
};

export default WeaponFilter;