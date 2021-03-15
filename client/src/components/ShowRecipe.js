import React, { Component } from 'react';
import { calculateRawCost } from '../actions/helpers'
import { costPerServing } from '../actions/helpers'
import { enoughInPantry } from '../actions/helpers'

class ShowRecipe extends Component {

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
        <div>Estimated Raw Cost: ${ calculateRawCost(this.props.recipe.ingredients).toFixed(2) }</div>
        <br></br>
        <br></br>
        <div>Estimated Cost Per Serving: ${ costPerServing(this.props.recipe).toFixed(2) }</div>
        <br></br>
        <br></br>
        <div>Instructions: { this.props.recipe.instructions }</div>
        <br></br>
        <br></br>
        <div>{ enoughInPantry(this.props.recipe.ingredients, this.props.pantry) }</div>
        <br></br>
        <br></br>
        <button onClick={ () => this.editRecipe(this.props.recipe) }>Edit Recipe</button>
    </div>
    );
  }

}

export default ShowRecipe