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
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <div
        ref={ node => this.node = node }
        onClick={ this.handleClick }>
        { this.props.selectedType || "Select a type" }
        { this.state.visible &&
          <DropdownMenu
            influencerType={ this.props.influencerType }
            setParentState={ this.props.setParentState }/>
        }
      </div>
    );
  }

}

export default DropdownButton;
