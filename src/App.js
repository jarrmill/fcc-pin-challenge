import React, { Component } from 'react';
import Header from './header';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.history.push('/home');
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} auth={this.props.auth} />
      </div>
    );
  }
}

export default App;
