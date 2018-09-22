import React from 'react';

class CardBody extends React.Component {
  constructor() {
    super();
    this.state = {
      influencerType: "",
      indicationCategory: ""
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Card Title</h1>
          <div>Dropdown</div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CardBody;
