import React, { Component } from 'react';

class Pantry extends Component {

    constructor(){
        super()
        this.state = {
            ingredients: []
        }
      }
    
      componentDidMount(){
        fetch(`http://localhost:3001/users/1/pantries/1`)
        .then(resp =>  resp.json())
        .then(ingredients => {
          console.log(ingredients)
          this.setState({
            ingredients: ingredients
          })
        })
      }

  render() {
    return (
    <div>
        <h2>Pantry: </h2>
        {/* turn this into a table with ingredients output */}
        <ul>
            { this.state.ingredients.map(ing => <li>{ing.id} - {ing.quantity}</li>) }
        </ul>
    </div>
    );
  }

}

export default Pantry