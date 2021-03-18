import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { sendRecipeData } from '../actions/index'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
      ingredientComponents: [],
      recipe: {
        id: 0,
        name: "",
        servings: 0,
        instructions: "",
        ingredients: []
      }
        
    }
  }

  // fix state throughout this component!
  componentDidMount(){
    console.log(this.props.recipe)
      this.setState({
        ingredientComponents: this.props.recipe.ingredients.map((ing, i) => this.makeComponent(ing, i)),
        recipe: {
          id: this.props.recipe.id,
          name: this.props.recipe.name,
          servings: this.props.recipe.servings,
          instructions: this.props.recipe.instructions,
          ingredients: this.props.recipe.ingredients
        }
      })
    } 

    // revisit add and remove ingredients - needs to be added and removed from both ingredientComponents and recipe.ingredients
  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    const emptyIngredient = {id: 0, name: "", quantity: 0, unit: ""}
    newState.ingredientComponents.push(this.makeComponent(emptyIngredient, newState.ingredientComponents.length - 1))
    newState.recipe.ingredients.push(emptyIngredient)
    this.setState( newState )
  }

    removeIngredient = (event, keyId) => {
        event.preventDefault()
        // needs to be fixed - I'll need to store ingredient components in state and map that instead. Which means reincorporating recipe sub-object
    }

    makeComponent = (ing, i) => {
        return <Ingredient 
            keyId={i + 1} 
            ingredientId={ ing.id } 
            ingredientQuantity={ ing.quantity }
            pantry={ this.props.pantry } 
            changeIngredient={ this.changeIngredient }
            changeQuantity={ this.changeQuantity }
            removeIngredient={ this.removeIngredient }
        />
    }

    changeRecipe = (event, category) => {
      console.log(this.state.recipe)
        let newState = Object.assign({}, this.state)
        newState.recipe[category] = event.target.value
        this.setState(newState)
    }

    changeIngredient = (event, id, category) => {
        let newState = Object.assign({}, this.state)
        newState.recipe.ingredients[id - 1][category] = event.target.value
        this.setState( newState )
    }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => sendRecipeData(event, this.props.routeMethod, this.state.recipe, this.props.userId, this.props.showRecipe)}>
          
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