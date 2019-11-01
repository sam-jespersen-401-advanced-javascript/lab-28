import React, { Component } from 'react';
import ColorContainer from './containers/ColorContainer';
import RandomColorDisplay from './containers/RandomColor';

export default class App extends Component {
  render() {
    return <>
      <ColorContainer />
      <RandomColorDisplay />
    </>;
  }
}
