import React, { Component } from 'react'
import NewIngredient from './NewIngredient'
import OldIngredient from './OldIngredient'

class EditRecipe extends Component {

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
    console.log(this.props)
    let ingredientComponents = this.props.recipe.ingredients.map((ing, i) => {
        return <OldIngredient 
            keyId={i + 1} 
            ingredientName={ ing.name } 
            ingredientQuantity={ ing.quantity } 
            ingredients={ this.props.ingredients } 
            changeIngredientComponent={ this.changeIngredientComponent }
        />})
    let existingIngredients = this.props.recipe.ingredients.map((ing, i) => {
            return {id: i + 1, quantity: ing.quantity}
        })
    console.log(existingIngredients)
    this.setState({
        ingredientComponents: ingredientComponents,
        recipe: {
            name: this.props.recipe.name,
            servings: this.props.recipe.servings,
            instructions: this.props.recipe.instructions,
            ingredients: existingIngredients
        }
    })
  } 

  addExistingIngredient = (ing, i) => {
    //
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

    fetch(`http://localhost:3001/users/${this.props.userId}/recipes`, configObject)
      .then(response => response.json())
      .then(json => this.props.showRecipe(json.id))
          // add catch
  }

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    let newId = newState.ingredientComponents.length + 1
    newState.ingredientComponents.push(<NewIngredient keyId={newId} ingredients={ this.props.ingredients } changeIngredient={ this.changeIngredient } />)
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

  changeIngredientComponent = (event, id, category) => {
    let recipeObject = Object.assign({}, this.state.recipe)
    recipeObject.ingredients[id - 1][category] = event.target.value
    this.setState({
      recipe: recipeObject
    })
    // ingredientComponentsArray.ingredients[id - 1][category] = event.target.value
    // this.setState({
    //   recipe: recipeObject
    // })
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
          
          <p onClick={this.addIngredient}>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" value={ this.state.recipe.instructions } onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
    </div>
    );
  }

}

export default EditRecipe