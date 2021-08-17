import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacValue = this.props.opacity - 0.1;
    if (opacValue >= 0.1) {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={opacValue} />
      </div>
    );
  } else {
    return null;
  }

}

}
