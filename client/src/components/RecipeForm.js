import React, { Component } from 'react'
import Ingredient from './Ingredient'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
      ingredientComponents: [],
      recipe: {
        name: "",
        servings: 0,
        instructions: "",
        ingredients: []
      }
    }
  }

  componentDidMount(){
    this.setState({
        recipe: this.props.recipe
    })
  } 

  addExistingIngredient = (ing, i) => {

  }

  addIngredient = () => {

  }

  changeRecipe = (event, category) => {

  }

  changeIngredient = (event, id, category) => {

  }

  // put this in actions
  sendRecipe = (event) => {
    event.preventDefault()
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(this.state.recipe)
    }

    fetch(`http://localhost:3001/users/${this.props.userId}/recipes`, configObject)
      .then(response => response.json())
      .then(json => this.props.showRecipe(json.id))
          // add catch
  }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => this.sendRecipe(event)}>
          
          Recipe Name: <input type ="text" value={ this.state.recipe.name } onChange={event => this.changeRecipe(event, "name")}></input> <br></br> <br></br>
          
          Servings: <input type="number" value={ this.state.recipe.servings } onChange={event => this.changeRecipe(event, "servings")}></input>  <br></br> <br></br>
          
          <div id="new-recipe-ingredients">
            { this.state.ingredientComponents.map(ing => ing) }
          </div>
          
          <p onClick={ this.addIngredient }>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" value={ this.state.recipe.instructions } onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
    </div>
    );
  }

}

export default RecipeForm