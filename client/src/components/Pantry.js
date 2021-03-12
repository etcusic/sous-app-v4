import React, { Component } from 'react';
import { calculateRawCost } from '../actions/helpers'

class Pantry extends Component {

  render() {
    return (
    <div>
        <h2>Pantry: </h2>
        <table>
          <thead>
            <tr>
                <th>Ingredient: </th>
                <th>Quantity: </th>
            </tr>
          </thead>

          <tbody>
            { this.props.ingredients.map(ingredient => <tr key={`pantry-ingredient-${ingredient.id}`}><td>{ingredient.name}</td><td>{`${ingredient.quantity} ${ingredient.unit}`}</td></tr>) }
          </tbody>
        </table>
        <br></br>
        <br></br>
        <div>Estimated Raw Cost in Pantry: ${ calculateRawCost(this.props.ingredients).toFixed(2) }</div>
    </div>
    );
  }

}

export default Pantry