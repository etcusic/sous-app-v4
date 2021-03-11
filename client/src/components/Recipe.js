import React, { Component } from 'react';

class Recipe extends Component {

  render() {
    return (
    <div>
        <h2>{this.props.recipe.name} - {this.props.recipe.servings} servings</h2>
        <table>
          <tr>
            <th>Ingredient: </th>
            <th>Quantity: </th>
          </tr>
          { this.props.recipe.ingredients.map(ingredient => <tr><td>{ingredient.name}</td><td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td></tr>) }
        </table>
        <br></br>
        <br></br>
        <br></br>
        <div>Estimated Raw Cost: ${ this.props.recipe.total_cost }</div>
        <br></br>
        <br></br>
        <div>Instructions: { this.props.recipe.instructions }</div>
        <br></br>
        <br></br>
        <div>{ this.props.recipe.in_pantry ? "There are enough ingredients in the pantry for this recipe!" : "Not enough ingredients in pantry for this recipe"}</div>
    </div>
    );
  }

}

export default Recipe