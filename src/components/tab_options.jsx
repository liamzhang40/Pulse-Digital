import React from 'react';

const TabOptions = ({selectedCategory, indicationCategory, setParentState}) => {
  const options = indicationCategory.map((option, idx) => (
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
