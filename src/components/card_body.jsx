import React from 'react';
import DropdownButton from './dropdown_button';
import { fetchData } from '../utility/influencers';

class CardBody extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedType: "",
      selectedCategory: "",
      data: null,
      influencerType: null,
      indicationCategory: null
    };
  }

  componentDidMount() {
    fetchData().then(data =>{
      const influencerType = new Set();
      const indicationCategory = new Set();
      data = JSON.parse(data);
      data.forEach(datum => {
        influencerType.add(datum.influencerType);
        indicationCategory.add(datum.indicationCategory);
      });
      this.setState({
        data,
        influencerType,
        indicationCategory
      });

    });
  }

  render() {
    console.log(this.state);
    // const { data } = this.state;
    // const influencerType = new Set();
    // const indicationCategory = new Set();
    // data.forEach(obj => {
    //
    // });

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
