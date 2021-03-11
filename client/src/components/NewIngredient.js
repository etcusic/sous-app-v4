import React, { Component } from 'react';

class NewIngredient extends Component {

  render() {
    return (
    <div key={`new-ingredient-${this.props.keyId}`}>
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients" onChange={event => this.props.changeIngredient(event, this.props.keyId, "pantryIngredientId") }>
          <option key="ingredient-option-0" value="0"></option>
            { this.props.ingredients.map(ingredient => <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ ingredient.name }</option>)}
        </select>
        <input type ="number" onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }></input>
        <input type ="text" placeholder="unit" onChange={ event => this.props.changeIngredient(event, this.props.keyId, "unit") }></input> <br></br>
    </div>
    );
  }

}

export default NewIngredient