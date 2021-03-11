import React, { Component } from 'react'
import NewIngredient from './NewIngredient'

class NewRecipe extends Component {

  // allow tab button to add an ingredient
  // STANDARDIZE FORM TO HANDLE EDIT && CREATE RECIPE

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
    this.addIngredient()
  }

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

    fetch(`http://localhost:3001/users/${this.state.userId}/recipes`, configObject)
      .then(response => response.json())
      .then(json => this.props.showRecipe(json.id))
          // add catch
  }

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    let newId = newState.ingredientComponents.length + 1
    newState.ingredientComponents.push(<NewIngredient keyId={newId} ingredients={this.props.ingredients} changeIngredient={this.changeIngredient} />)
    newState.recipe.ingredients.push({id: newId})
    this.setState(newState)
  }

  changeRecipe = (event, category) => {
    let recipeObject = this.state.recipe
    recipeObject[category] = event.target.value
    this.setState({
      recipe: recipeObject
    })
  }

  changeIngredient = (event, id, category) => {
    let recipeObject = Object.assign({}, this.state.recipe)
    recipeObject.ingredients[id - 1][category] = event.target.value
    this.setState({
      recipe: recipeObject
    })
  }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => this.sendRecipe(event)}>
          
          Recipe Name: <input type ="text" onChange={event => this.changeRecipe(event, "name")}></input> <br></br> <br></br>
          
          Servings: <input type="number" onChange={event => this.changeRecipe(event, "servings")}></input>  <br></br> <br></br>
          
          <div id="new-recipe-ingredients">
            { this.state.ingredientComponents.map(ing => ing) }
          </div>
          
          <p onClick={this.addIngredient}>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
    </div>
    );
  }

}

export default NewRecipe