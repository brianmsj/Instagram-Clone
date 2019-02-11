import React, { Component } from 'react';
import './App.css';
import Header from './header.js'

class App extends Component {
    state = {
      count: 10
    }
    constructor(props) {
    super(props);
     this.add = this.add.bind(this);
     this.minus = this.minus.bind(this);
}
    add(){
      console.log('adding')
      this.setState({count: this.state.count + 1})
    };
    minus(){
      console.log('minus')
      this.setState({count: this.state.count - 1})
    }

  render() {

    return (
        <div>
        <Header />
          <p>
            How many apps can we build? {this.state.count}
          </p>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
        </div>
    );
  }
}

export default App;
