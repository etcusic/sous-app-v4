import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  constructor(){
    super()
    this.state = {
        user: "Not the name"
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/users/1`)
    .then(resp =>  resp.json())
    .then(user => {
      console.log(user.name)
      this.setState({
        user: user.name
      })
    })
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          <h1>{ this.state.user }</h1>
        </body>
      </div>
    );
  }

}

export default App;
