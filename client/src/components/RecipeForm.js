import React, { Component } from 'react'
import AddIngredient from './AddIngredient'
import RecipeStatus from './RecipeStatus'
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

  // fix state throughout this component!
  componentDidMount(){
      this.setState({
          id: this.props.recipe.id,
          name: this.props.recipe.name,
          servings: this.props.recipe.servings,
          instructions: this.props.recipe.instructions,
          ingredients: this.props.recipe.ingredients
      })
    } 

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    newState.ingredients.push({id: 0, name: "", quantity: 0, unit: ""})
    this.setState( newState )
  }

    removeIngredient = (event, keyId) => {
        event.preventDefault()
        let newState = Object.assign({}, this.state)
        newState.ingredients = newState.ingredients.filter((ing, i) => i !== keyId - 1)
        this.setState( newState )
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
        newState[category] = event.target.value
        this.setState(newState)
    }

    categorizedPantry = () => {
      const pantry = {
          "all": this.props.pantry,
          "proteins": this.props.pantry.filter(x => x.category === "proteins"),
          "dried goods": this.props.pantry.filter(x => x.category === "dried goods"),
          "produce": this.props.pantry.filter(x => x.category === "produce"),
          "dairy": this.props.pantry.filter(x => x.category === "dairy"),
          "frozen goods": this.props.pantry.filter(x => x.category === "frozen goods"),
          "condiments": this.props.pantry.filter(x => x.category === "condiments"),
          "spices": this.props.pantry.filter(x => x.category === "spices")
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
          
          <AddIngredient pantry={ this.categorizedPantry() } />
          
          <RecipeStatus recipe={ this.state.ingredients } />

          <p onClick={ this.addIngredient }>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" value={ this.state.instructions } onChange={event => this.changeRecipe(event, "instructions")}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
        <button onClick={ this.checkIngredients }>Check 1,2</button>
    </div>
    );
  }

}

export default RecipeForm