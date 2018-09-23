import React from 'react';

const DropdownMenu = ({influencerType, setParentState}) => {
  const types = influencerType.map((type, idx) => (
    <li
      key={idx}
      onClick={() => setParentState(type)}>{type}</li>
  ))
  return (
    <div>
      <ul>
        {types}
      </ul>
    </div>
  )
};

export default DropdownMenu;
