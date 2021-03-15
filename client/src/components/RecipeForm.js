import React, { Component } from 'react'
import Ingredient from './Ingredient'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
      recipe: {
        name: "",
        servings: 0,
        instructions: "",
        ingredients: []
      }
    }
  }

  componentDidMount(){
    this.setState({recipe: this.props.recipe})
  } 

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    newState.recipe.ingredients.push({name: "", quantity: 0})
    this.setState(newState)
  }

  makeComponent = (ing, i) => {
    return <Ingredient 
        keyId={i + 1} 
        ingredientName={ ing.name } 
        ingredientQuantity={ ing.quantity } 
        ingredients={ this.props.ingredients } 
        changeIngredient={ this.changeIngredient }
    />
  }

  changeRecipe = (event, category) => {
    let recipeObject = this.state.recipe
    recipeObject[category] = event.target.value
    this.setState({ recipe: recipeObject })
  }

  changeIngredient = (event, id, category) => {
    let recipeObject = Object.assign({}, this.state.recipe)
    recipeObject.ingredients[id - 1][category] = event.target.value
    this.setState({ recipe: recipeObject })
  }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        {/* this.prop.sendRecipeData(event, this.state, this.props.userId) should be for both creating and updating a recipe */}
        <form onSubmit={event => this.props.sendRecipeData(event, this.state.recipe, this.props.userId, this.props.showRecipe)}>
          
          Recipe Name: <input type ="text" value={ this.state.recipe.name } onChange={event => this.changeRecipe(event, "name")}></input> <br></br> <br></br>
          
          Servings: <input type="number" value={ this.state.recipe.servings } onChange={event => this.changeRecipe(event, "servings")}></input>  <br></br> <br></br>
          
          <div id="new-recipe-ingredients">
            { this.state.recipe.ingredients.map((ing, i) => this.makeComponent(ing, i)) }
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