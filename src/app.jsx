import React from 'react';
import ReactDOM from 'react-dom';
import CardBody from './components/card_body';
import influencerTypes from './utility/influencers';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<CardBody />, root);
});

window.influencerTypes = influencerTypes;
