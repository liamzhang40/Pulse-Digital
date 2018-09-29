import React from 'react';
import DropdownMenu from './dropdown_menu';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.visible) {
      if (this.refs.button.contains(e.target)) return;
      document.removeEventListener('click', this.handleClick);
    } else {
      document.addEventListener('click', this.handleClick);
    }

    this.setState({visible: !this.state.visible});
  }

  render() {
    return (
      <div
        className="dropdown-button"
        onClick={ this.handleClick }>
        { this.props.selectedType }
        { this.state.visible &&
          <div ref="button">
            <DropdownMenu
              setParentState={ this.props.setParentState }
              influencerTypes={ this.props.influencerTypes }/>
          </div>
        }
      </div>
    );
  }

}

export default DropdownButton;
