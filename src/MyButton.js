import React from 'react';
import pincoya from './assets/pincoya.jpg';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button className="my-button-green" onClick={this.toggleVisibility}>Click Me!</button>
          <h1>Cuando al arte y la tradicion confluyen, las ideas viven para siempre</h1>
          <img className="my-image" src={pincoya} alt="Pincoya" />
        </div>
      );
    } else {
      return (
        <div>
          <button className="my-button" onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

export default MyButton;
