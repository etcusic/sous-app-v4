import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { sendRecipeData } from '../actions/index'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
        id: 0,
        name: "",
        servings: 0,
        instructions: "",
        ingredients: []
    }
  }

  componentDidMount(){
      this.setState(this.props.recipe)
    } 

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    newState.ingredients.push({id: 0, name: "", quantity: 0, unit: ""})
    console.log(newState)
    this.setState(newState)
  }

    removeIngredient = (event, keyId) => {
        event.preventDefault()
        let newState = Object.assign({}, this.state)
        newState.ingredients = newState.ingredients.filter((ing, i) => i !== keyId - 1)
        this.setState(newState)
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
        // event.preventDefault()
        let newIngredients = [...this.state.ingredients]
        newIngredients[id - 1][category] = event.target.value
        console.log(newIngredients)
        console.log(this.props.pantry)
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
                { this.state.ingredients.map((ing, i) => this.makeComponent(ing, i)) }
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