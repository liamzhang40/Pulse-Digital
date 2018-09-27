import React from 'react';

const DropdownMenu = ({influencerTypes, setParentState}) => {
  const types = influencerTypes.map((type, idx) => (
    <li
      key={idx}
      onMouseDown={() => setParentState(type)}>{type}</li>
  ));

  return (
    <div className="dropdown-menu">
      <ul>
        {types}
      </ul>
    </div>
  );
};

export default DropdownMenu;
