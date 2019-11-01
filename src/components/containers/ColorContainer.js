import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';
import ColorPicker from '../colors/ColorPicker';


export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {  
    const { backgroundColor } = this.state;
    const colors = ['red', 'blue', 'pink', 'purple', 'grey', 'orange', 'yellow', 'brown', 'green', 'white', 'black'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }

}
