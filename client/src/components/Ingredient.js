import React, { Component } from 'react';

class Ingredient extends Component {

  render() {
    return (
    <div key={`new-ingredient-${this.props.keyId}`}>
            { console.log(this.props) }
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients" onChange={event => this.props.changeIngredient(event, this.props.keyId, "id") }>
            { this.props.pantry.map(ingredient => {
                if (ingredient.name === this.props.ingredientName){
                    return <option selected key={`ingredient-option-${ingredient.id}`} value={ ingredient.id } >{ `${ingredient.name} - ${ingredient.unit}` }</option>
                } else {
                    return <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ `${ingredient.name} - ${ingredient.unit}` }</option>
                }
            })}
        </select>
        <input type ="number" value={ this.props.ingredientQuantity } onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }></input>
        <button onClick={ event => this.props.removeIngredient(event, this.props.keyId) }>- remove -</button>
    </div>
    );
  }

}

export default Ingredient

