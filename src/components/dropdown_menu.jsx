import React from 'react';

const DropdownMenu = ({influencerTypes, setParentState}) => {
  const types = influencerTypes.map((type, idx) => (
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
