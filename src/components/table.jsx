import React from 'react';

const Table = ({data, selectedType, selectedCategory}) => {
  const tableHeaders = ["member", "affiliation", "affiliationPosition", "primaryState"];
  const generateTDS = (obj) => {
    const tds = [];
    for(const key in obj) {
      if (tableHeaders.includes(key)) {
        tds.push(<td key={key}>{obj[key]}</td>);
      }
    }
    return tds;
  };

  const rows = data.map((datum, idx) => (
    <tr key={idx}>{ generateTDS(datum) }</tr>
  ));

  return (
    <tbody>
      <tr>
        <th>Member</th>
        <th>Affiliation</th>
        <th>Title</th>
        <th>State</th>
      </tr>
      {rows}
    </tbody>
  );
};

export default Table;
