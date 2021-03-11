import React, { Component } from 'react';

class NewIngredient extends Component {

  render() {
    return (
    <div key={`new-ingredient-${this.props.keyId}`}>
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients" onChange={ this.props.changeIngredientId }>
          <option value="0"></option>
            { this.props.ingredients.map(ingredient => <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ ingredient.name }</option>)}
        </select>
        <input type ="number" onChange={ this.props.changeIngredientQuantity }></input>
        <input type ="text" placeholder="unit" onChange={ this.props.changeIngredientUnit }></input> <br></br>
    </div>
    );
  }

}

export default NewIngredient