import React from 'react';

const TabOptions = ({selectedCategory, indicationCategories, setParentState}) => {
  const style = {
    position: "relative",
    top: "2px",
    border: "solid 2px rgb(53, 125, 210)",
    borderBottom: "none",
    borderRadius: "3px 3px 0 0",
    background: "#fff",
    color: "#000"
  }

  const options = indicationCategories.map((option, idx) => (
    <li
      key={idx}
      onClick={() => setParentState(option)}
      style={selectedCategory === option ? style : {}}>{option}</li>
  ))

  return (
    <div className="tap-options">
      <ul>
        {options}
      </ul>
    </div>
  )
};

export default TabOptions;
