import React, { Component } from 'react';
import UserProfile from './UserProfile.js'

class HomePage extends Component {
  
  constructor(){
    super()
    this.state = {
        user: "Not the name",
        view: <UserProfile />
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/users/1`)
    .then(resp =>  resp.json())
    .then(user => {
      this.setState({
        user: user.name
      })
    })
    
  }

  render() {
    return (
    <div>
        <header>
            <h1>{ this.state.user }</h1>
        </header>

        <body>
            { this.state.view }
        </body>
    </div>
    );
  }

}

export default HomePage
