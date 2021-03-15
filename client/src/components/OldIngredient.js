import React, { Component } from 'react';

class OldIngredient extends Component {

  render() {
    return (
    <div key={`new-ingredient-${this.props.keyId}`}>
    {console.log(this.props)}
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients" onChange={event => this.props.changeIngredientComponent(event, this.props.keyId, "pantryIngredientId") }>
          <option key="ingredient-option-0" value="0"></option>
            { this.props.ingredients.map(ingredient => {
                if (ingredient.name === this.props.ingredientName){
                    return <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id } selected>{ ingredient.name }</option>
                } else {
                    return <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ ingredient.name }</option>
                }
            })}
        </select>
        <input type ="number" value={ this.props.ingredientQuantity } onChange={ event => this.props.changeIngredientComponent(event, this.props.keyId, "quantity") }></input>
    </div>
    );
  }

}

export default OldIngredient