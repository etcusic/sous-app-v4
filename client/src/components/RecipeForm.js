import React, { Component } from 'react'
import Ingredient from './Ingredient'

class RecipeForm extends Component {

  constructor(){
    super()
    this.state = {
        name: "",
        servings: 0,
        instructions: "",
        ingredients: []
    }
  }

  componentDidMount(){
        this.setState({
            name: this.props.recipe.name, 
            servings: this.props.recipe.servings,
            instructions: this.props.recipe.instructions,
            ingredients: this.props.recipe.ingredients
        })
    } 

//   componentDidMount(){
//     console.log((this.props.recipe))
//     this.setState({recipe: this.props.recipe})
//   } 

  addIngredient = () => {
    let newState = Object.assign({}, this.state)
    newState.ingredients.push({id: 0, name: "", quantity: 0})
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
        let newState = Object.assign({}, this.state)
        newState[category] = event.target.value
        this.setState(newState)
    }

    changeIngredient = (event, id, category) => {
        let newState = Object.assign({}, this.state)
        newState.ingredients[id - 1][category] = event.target.value
        this.setState(newState)
    }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        {/* sendRecipeData does need to be sent through as props - but 'POST' or 'PATCH' need to be sent and implemented as method param */}
        <form onSubmit={event => this.props.sendRecipeData(event, this.state, this.props.userId, this.props.showRecipe)}>
          
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