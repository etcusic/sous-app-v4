import React, { Component } from 'react';

class NewIngredient extends Component {

  render() {
    return (
    <div>
        Ingredient: 
        <select name="ingredients" id="new-recipe-ingredients">
            { this.props.ingredients.map(ingredient => <option placeholder="ingredient" value={ ingredient.name }>{ ingredient.name }</option>)}
        </select>
        <input type ="number"></input>
        <input type ="text" placeholder="unit"></input> <br></br>
    </div>
    );
  }

}

export default NewIngredient