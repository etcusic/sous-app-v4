import React, { Component } from 'react';

class NewIngredient extends Component {

  render() {
    return (
    <div>
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients" onChange={ this.props.changeIngredientName }>
            { this.props.ingredients.map(ingredient => <option placeholder="ingredient" value={ ingredient.name }>{ ingredient.name }</option>)}
        </select>
        <input type ="number" onChange={ this.props.changeIngredientQuantity }></input>
        <input type ="text" placeholder="unit" onChange={ this.props.changeIngredientUnit }></input> <br></br>
    </div>
    );
  }

}

export default NewIngredient