import React, { Component } from 'react'
import AddIngredient from './AddIngredient'
import RecipeStatus from './RecipeStatus'
import { sendRecipeData } from '../actions/index'
import Placeholder from './Placeholder'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
        id: 0,
        name: "",
        servings: 0,
        instructions: "",
        ingredients: [],
        addIngredient: <Placeholder /> 
    }
  }

  // NEED TO FIGURE OUT HOW TO RESET ADD INGREDIENT COMPONENT WITH ITS SELECTORS - componentDidUnmount???
  componentDidMount(){
      this.setState({
          id: this.props.recipe.id,
          name: this.props.recipe.name,
          servings: this.props.recipe.servings,
          instructions: this.props.recipe.instructions,
          ingredients: this.props.recipe.ingredients,
          addIngredient: <AddIngredient pantry={ this.categorizedPantry() } addIngredient={ this.addIngredient } ing={{id: 0, name: "", quantity: 0, unit: ""}} />
      })
    } 

  addIngredient = (event, ing) => {
    event.preventDefault()
    let ingredients = [...this.state.ingredients, ing]
    this.setState({ 
      ingredients: ingredients,
      addIngredient: <AddIngredient pantry={ this.categorizedPantry() } addIngredient={ this.addIngredient } ing={{id: 0, name: "", quantity: 0, unit: ""}} />
    })
  }

    removeIngredient = (event, index) => {
        event.preventDefault()
        let newState = Object.assign({}, this.state)
        newState.ingredients = newState.ingredients.filter((ing, i) => i !== index)
        this.setState( newState )
    }

    changeRecipe = (event, category) => {
        let newState = Object.assign({}, this.state)
        newState[category] = event.target.value
        this.setState(newState)
    }

    categorizedPantry = () => {
      let newPantry = this.props.pantry.map(x => {
                                          x.quantity = 0
                                          return x
                                        })
      const pantry = {
          "all": newPantry,
          "proteins": newPantry.filter(x => x.category === "proteins"),
          "dried goods": newPantry.filter(x => x.category === "dried goods"),
          "produce": newPantry.filter(x => x.category === "produce"),
          "dairy": newPantry.filter(x => x.category === "dairy"),
          "frozen goods": newPantry.filter(x => x.category === "frozen goods"),
          "condiments": newPantry.filter(x => x.category === "condiments"),
          "spices": newPantry.filter(x => x.category === "spices")
      }
      return pantry
    }

    checkIngredients = () => {
      console.log(this.state.ingredients)
    }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => sendRecipeData(event, this.props.routeMethod, this.state, this.props.userId, this.props.showRecipe)}>
          
          Recipe Name: <input type ="text" value={ this.state.name } onChange={event => this.changeRecipe(event, "name")}></input> <br></br> <br></br>
          
          Servings: <input type="number" value={ this.state.servings } onChange={event => this.changeRecipe(event, "servings")}></input>  <br></br> <br></br>
          
          { this.state.addIngredient }
          
          <br></br><br></br>
          <div>Current Ingredients: </div>

          <RecipeStatus ingredients={ this.state.ingredients } removeIngredient={ this.removeIngredient } />
          
          <br></br><br></br>
          Instructions: <input type="text" value={ this.state.instructions } onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
        <button onClick={ this.checkIngredients }>Check 1,2</button>
    </div>
    );
  }

}

export default RecipeForm