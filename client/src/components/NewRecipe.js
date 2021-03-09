import React, { Component } from 'react';

class NewRecipe extends Component {

  render() {
    return (
    <div>
        New Recipe:
        <form>
          <select name="ingredients" id="new-recipe-ingredients">
            { this.props.ingredients.map(ingredient => <option value={ ingredient.name }>{ ingredient.name }</option>)}
          </select>
          <input type ="number"></input>  
        </form>
    </div>
    );
  }

}

export default NewRecipe