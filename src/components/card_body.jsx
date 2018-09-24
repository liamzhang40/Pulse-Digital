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
      typeCategory: null
    };
  }

  componentDidMount() {
    fetchData().then(data =>{
      data = JSON.parse(data);
      const typeCategory = {};
      data.forEach(datum => {
        if (typeCategory[datum.influencerType]) {
          typeCategory[datum.influencerType].add(datum.indicationCategory);
        } else {
          typeCategory[datum.influencerType] = new Set().add(datum.indicationCategory);
        }
      });
      const selectedType = Object.keys(typeCategory).sort()[0];
      const selectedCategory = [...typeCategory[selectedType]].sort()[0];

      this.setState({
        selectedType,
        selectedCategory,
        data,
        typeCategory,
      });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    const {
      selectedType,
      selectedCategory,
      data,
      typeCategory
    } = nextState;

    if (!typeCategory[selectedType].has(selectedCategory)) {
      const selectedCategory = [...typeCategory[selectedType]].sort()[0];
      this.setState({selectedCategory});
    }
  }

  render() {
    const {
      selectedType,
      selectedCategory,
      data,
      typeCategory
    } = this.state;

    const influencerTypes = typeCategory ? Object.keys(typeCategory).sort()
    : [];
    const indicationCategories = typeCategory ? [...typeCategory[selectedType]].sort()
    : [];
    const filteredData = data ? data.filter(datum => {
      return (
        (!selectedType || datum.influencerType === selectedType) &&
        (!selectedCategory || datum.indicationCategory === selectedCategory)
      );
    })
    : [];

    return (
      <div>
        <div className="card-header">
          <h1>Card Title</h1>
          <DropdownButton
            selectedType={ selectedType }
            influencerTypes={ influencerTypes }
            setParentState={ type => this.setState({selectedType: type}) }/>
        </div>

        <div className="card-body">
          <TabOptions
            selectedCategory={ selectedCategory }
            indicationCategories={ indicationCategories }
            setParentState={ type => this.setState({selectedCategory: type}) }/>
          <div className="table-container">
            <table>
              <Table data={filteredData} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBody;
