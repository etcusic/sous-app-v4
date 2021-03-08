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
            this.setState({
            ingredients: ingredients
            })
        })
    }

  render() {
    return (
    <div>
        <h2>Pantry: </h2>
        <table>
            <tr>
                <th>Ingredient: </th>
                <th>Quantity: </th>
            </tr>
            { this.state.ingredients.map(ingredient => <tr><td>{ingredient.name}</td><td>{`${ingredient.quantity} ${ingredient.unit}`}</td></tr>) }
        </table>
    </div>
    );
  }

}

export default Pantry