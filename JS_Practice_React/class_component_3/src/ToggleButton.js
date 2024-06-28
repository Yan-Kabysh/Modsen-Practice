import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  toggleButtonText = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  render() {
    const buttonText = this.state.isShown ? 'Hide' : 'Show';

    return (
      <button onClick={this.toggleButtonText}>
        {buttonText}
      </button>
    );
  }
}

export default ToggleButton;
