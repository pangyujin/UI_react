import React, {Component} from 'react';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    // this.handleClick = this.handleClick.bind(this);
    // this.displayParity = this.displayParity.bind(this);
  }

  handleClick = function() {
    this.setState({
      counter: this.state.counter + 1
    });
  }.bind(this);

  displayParity = function() {
    return this.state.counter % 2 === 0 ? "Even" : "Odd";
  }.bind(this);

  render() {
    return (
      <div>
        <h2>Count : {this.state.counter}</h2>
        <h2>Count is {this.displayParity()}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Box;