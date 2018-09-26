import React from 'react';
import DropdownMenu from './dropdown_menu';

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.visible) {
      document.addEventListener('mousedown', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
    }

    this.setState({visible: !this.state.visible});
  }

  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) this.handleClick();
  }

  render() {
    return (
      <div
        className="dropdown-button"
        ref={ node => this.node = node }
        onClick={ this.handleClick }>
        { this.props.selectedType }
        { this.state.visible &&
          <DropdownMenu
            influencerTypes={ this.props.influencerTypes }
            setParentState={ this.props.setParentState }/>
        }
      </div>
    );
  }

}

export default DropdownButton;
