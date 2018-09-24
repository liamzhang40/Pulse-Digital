import React from 'react';

const TabOptions = ({selectedCategory, indicationCategories, setParentState}) => {
  const options = indicationCategories.map((option, idx) => (
    <li
      key={idx}
      onClick={() => setParentState(option)}>{option}</li>
  ))
  return (
    <div>
      <ul>
        {options}
      </ul>
    </div>
  )
};

export default TabOptions;
