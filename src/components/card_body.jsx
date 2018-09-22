import React from 'react';
import DropdownButton from './dropdown_button';

class CardBody extends React.Component {
  constructor() {
    super();
    this.state = {
      influencerType: "",
      indicationCategory: ""
    };
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <div>
          <h1>Card Title</h1>
          <DropdownButton />
        </div>
        <div></div>
      </div>
    );
  }
}

export default CardBody;
