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

  componentDidMount(){
    console.log(this.props.recipe)
      this.setState({
        ingredientComponents: this.props.recipe.ingredients.map((ing, i) => this.makeComponent(ing, i)),
        recipe: this.props.recipe
      })
    } 

  addIngredient = () => {
    let newIngredients = [...this.state.ingredients]
    newIngredients.push({id: 0, name: "", quantity: 0, unit: ""})
    this.setState({ingredients: newIngredients})
  }

    removeIngredient = (event, keyId) => {
        event.preventDefault()
        // needs to be fixed - I'll need to store ingredient components in state and map that instead. Which means reincorporating recipe sub-object
    }

    makeComponent = (ing, i) => {
        return <Ingredient 
            keyId={i + 1} 
            ingredientName={ ing.name } 
            ingredientQuantity={ ing.quantity }
            pantry={ this.props.pantry } 
            changeIngredient={ this.changeIngredient }
            removeIngredient={ this.removeIngredient }
        />
    }

    changeRecipe = (event, category) => {
        let newState = Object.assign({}, this.state)
        newState[category] = event.target.value
        this.setState(newState)
    }

    changeIngredient = (event, id, category) => {
        let newIngredients = [...this.state.ingredients]
        newIngredients[id - 1][category] = event.target.value
        this.setState({ingredients: newIngredients})
    }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => sendRecipeData(event, this.props.routeMethod, this.state, this.props.userId, this.props.showRecipe)}>
          
          Recipe Name: <input type ="text" value={ this.state.name } onChange={event => this.changeRecipe(event, "name")}></input> <br></br> <br></br>
          
          Servings: <input type="number" value={ this.state.servings } onChange={event => this.changeRecipe(event, "servings")}></input>  <br></br> <br></br>
          
            <div id="new-recipe-ingredients">
            {console.log(this.state)}
                {/* { this.state.ingredients.map((ing, i) => this.makeComponent(ing, i)) } */}
            </div>
          
          <p onClick={ this.addIngredient }>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" value={ this.state.instructions } onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
    </div>
    );
  }

}

export default RecipeForm