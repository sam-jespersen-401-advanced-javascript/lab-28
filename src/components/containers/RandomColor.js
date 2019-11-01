import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';

let colors = ['red', 'blue', 'pink', 'purple', 'grey', 'orange', 'yellow', 'brown', 'green', 'white', 'black'];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

export default class randomColorDisplay extends Component {

    state = {
      backgroundColor: randomColor(),
      backgroundImage: 'none'
    }

    componentDidMount() {

      setInterval(() => {

        const newColor = randomColor();

        if(newColor !== this.state.backgroundColor) {
          this.setState({
            backgroundColor: randomColor(),
            backgroundImage: 'none'
          });

        } else {
          this.setState({ backgroundColor: 'none', backgroundImage: 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")' });
        }

      }, 100);
    }

    render() {
      return (
        <ColorDisplay backgroundColor={this.state.backgroundColor} backgroundImage={this.state.backgroundImage} />
      );
    }
}
