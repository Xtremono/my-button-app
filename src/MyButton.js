import React from 'react';

class MyButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }

  render(){
    if(this.state.visibility){
      return(
        <div>
          <button className="my-button-green" onClick={this.toggleVisibility}>Click Me!</button>
          <h1>Now you see me!</h1>
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
