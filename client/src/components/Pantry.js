import React, { Component } from 'react';

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
    </div>
    );
  }

}

export default Pantry