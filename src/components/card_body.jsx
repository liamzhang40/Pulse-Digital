import React from 'react';
import { fetchData } from '../utility/influencers';
import DropdownButton from './dropdown_button';
import TabOptions from './tab_options';
import Table from './table';

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
      let influencerType = new Set();
      let indicationCategory = new Set();
      data = JSON.parse(data);
      data.forEach(datum => {
        influencerType.add(datum.influencerType);
        indicationCategory.add(datum.indicationCategory);
      });

      influencerType = [...influencerType].sort();
      indicationCategory = [...indicationCategory].sort();

      this.setState({
        data,
        influencerType,
        indicationCategory
      });

    });
  }

  render() {
    const {
      selectedType,
      selectedCategory,
      data,
      influencerType,
      indicationCategory,
    } = this.state;

    const filteredData = data ? data.filter(datum => {
      return (
        (!selectedType || datum.influencerType === selectedType) &&
        (!selectedCategory || datum.indicationCategory === selectedCategory)
      );
    })
    : [];

    return (
      <div>
        <div>
          <h1>Card Title</h1>
          <DropdownButton
            selectedType={ selectedType }
            influencerType={ influencerType }
            setParentState={ type => this.setState({selectedType: type}) }/>
        </div>

        <div>
          <TabOptions
            selectedCategory={ selectedCategory }
            indicationCategory={ indicationCategory || [] }
            setParentState={ type => this.setState({selectedCategory: type}) }/>
          <table>
            <Table data={filteredData} />
          </table>
        </div>
      </div>
    );
  }
}

export default CardBody;
