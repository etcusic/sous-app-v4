import React, { Component } from 'react';

class Recipe extends Component {

  render() {
    return (
    <div>
        <h2>{this.props.recipe.name} - {this.props.recipe.servings} servings</h2>
        <table>
          <thead>
            <tr>
              <th>Ingredient: </th>
              <th>Quantity: </th>
            </tr>
          </thead>
          <tbody>
            { this.props.recipe.ingredients.map(ingredient => <tr key={`recipe-ingredient-${ingredient.id}`}><td>{ingredient.name}</td><td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td></tr>) }
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <div>Estimated Raw Cost: ${ this.props.recipe.ingredients.map(x => x.quantity * x.cost_per_unit).reduce((y,z) => y += z).toFixed(2) }</div>
        <br></br>
        {/* THESE 2 FUNCTIONS NEEDS TO BE ACCESSED IN OTHER PLACES  */}
        <br></br>
        <div>Estimated Cost Per Serving: ${ (this.props.recipe.ingredients.map(x => x.quantity * x.cost_per_unit).reduce((y,z) => y += z) / this.props.recipe.servings).toFixed(2) }</div>
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