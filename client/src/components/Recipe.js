import React, { Component } from 'react';

class Recipe extends Component {

  constructor(){
    super()
    this.state = {
        name: "not the recipe name",
        servings: 0,
        instructions: "these are not the instructions",
        ingredients: []
    }
  }

componentDidMount(){
    console.log(this.props.recipe)
}

  render() {
    return (
    <div>
        <h2>{this.state.name} - {this.state.servings} servings</h2>
        <table>
          <tr>
            <th>Ingredient: </th>
            <th>Quantity: </th>
          </tr>
          { this.state.recipe.ingredients.map(ingredient => <tr><td>{ingredient.name}</td><td>{`${ingredient.quantity} ${ingredient.unit}`}</td></tr>) }
        </table>
    </div>
    );
  }

}

export default Recipe