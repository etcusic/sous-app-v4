import React, { Component } from 'react';
import ShowIngredientsTable from './ShowIngredientsTable.js'

class ShowRecipe extends Component {

  render() {
    return (
    <div>
        <h2>{this.props.recipe.name} - {this.props.recipe.servings} servings</h2>
        { this.props.recipe.ingredients[0].id !== 0 ? <ShowIngredientsTable recipe={ this.props.recipe } pantry={ this.props.pantry } /> : "There are no ingredients listed for this recipe yet" }
        <br></br>
        <br></br>
        <div>Instructions: { this.props.recipe.instructions }</div>
        <br></br>
        <br></br>
        {/* will have a problem with the edit form if there are no ingredients listed initially */}
        <button onClick={ this.props.recipeForm }>Edit Recipe</button>
    </div>
    );
  }

}

export default ShowRecipe