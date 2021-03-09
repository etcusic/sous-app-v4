import React, { Component } from 'react';

class Pantry extends Component {

  render() {
    return (
    <div>
        <h2>Pantry: </h2>
        <table>
            <tr>
                <th>Ingredient: </th>
                <th>Quantity: </th>
            </tr>
            { this.props.ingredients.map(ingredient => <tr><td>{ingredient.name}</td><td>{`${ingredient.quantity} ${ingredient.unit}`}</td></tr>) }
        </table>
    </div>
    );
  }

}

export default Pantry