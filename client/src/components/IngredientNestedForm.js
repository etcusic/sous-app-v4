import React, { Component } from 'react';
import NewIngredient from './NewIngredient'

class IngredientNestedForm extends Component {

  render() {
    return (
    <div>
        { this.props.ingredients.map(ing => ing)}
        <p onClick={this.props.addIngredient}>++ Add Ingredient ++</p> <br></br> 
    </div>
    );
  }

}

export default IngredientNestedForm