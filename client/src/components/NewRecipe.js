import React, { Component } from 'react'
import NewIngredient from './NewIngredient'

class NewRecipe extends Component {

  // add componentDidUnmount to reset state
  // allow tab button to add an ingredient
  // STANDARDIZE FORM TO HANDLE EDIT RECIPE AS WELL
  // refactor to let state have a recipe object that doesn't need to be converted
  constructor(){
    super()
    this.state = {
      ingredientComponents: [],
      recipeName: "",
      recipeServings: 0,
      recipeIngredients: [],
      recipeInstructions: ""
    }
  }

  componentDidMount(){
    this.addIngredient()
  }

  convertStateToRecipe(){
    let obj = {...this.state}
    return {
      name: obj.recipeName,
      servings: obj.recipeServings,
      instructions: obj.recipeInstructions,
      ingredients: obj.recipeIngredients
    }
  }

  sendRecipe = (event) => {
    event.preventDefault()
    console.log("send recipe => ")
    console.log(this.state)
    let recipe = this.convertStateToRecipe()  
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(recipe)
    }

    fetch(`http://localhost:3001/users/1/recipes`, configObject)
      .then(function(response){
          return response.json()
      })
      .then(function(json){
        console.log(json)
        console.log("should I do something here??")
      })
          // add catch
  }

  addIngredient = () => {
    // need to check to make sure last ingredient has everything filled out first or else it doesn't register the previous ingredient
    // LOOK INTO ADDING IDENTIFIERS FOR EACH HTML ELEMENT TO BE FOUND EASIER
    let arr = [...this.state.ingredientComponents]
    arr.push(<NewIngredient ingredients={this.props.ingredients} changeIngredientName={this.changeIngredientName} changeIngredientQuantity={this.changeIngredientQuantity} changeIngredientUnit={this.changeIngredientUnit} />)
    let ings = [...this.state.recipeIngredients, {}]
    this.setState({
      ingredientComponents: arr,
      recipeIngredients: ings
    })
  }

  changeName = event => {
    this.setState({
      recipeName: event.target.value
    })
  }

  changeServings = event => {
    this.setState({
      recipeServings: event.target.value
    })
  }

  changeInstructions = event => {
    this.setState({
      recipeInstructions: event.target.value
    })
  }

  // should be able to hone this down to 1 function rather than 3 with arguments and block notation - also whittle down the functions processing
  changeIngredientName = event => {
    let name = event.target.value
    let arr = this.state.recipeIngredients
    let obj = arr[arr.length - 1]
    obj.name = name
    this.setState({
      recipeIngredients: arr
    })
  }

  changeIngredientQuantity = event => {
    let quantity = event.target.value
    let arr = this.state.recipeIngredients
    let obj = arr[arr.length - 1]
    obj.quantity = quantity
    this.setState({
      recipeIngredients: arr
    })
  }

  changeIngredientUnit = event => {
    let unit = event.target.value
    let arr = this.state.recipeIngredients
    let obj = arr[arr.length - 1]
    obj.unit = unit
    this.setState({
      recipeIngredients: arr
    })
  }

  render() {
    return (
    <div>
        <h2>New Recipe:</h2><br></br> 
        <form onSubmit={event => this.sendRecipe(event)}>
          
          Recipe Name: <input type ="text" onChange={event => this.changeName(event)}></input> <br></br> <br></br>
          
          Servings: <input type ="number" onChange={event => this.changeServings(event)}></input>  <br></br> <br></br>
          
          {/* set ingredients list up as a table??? */}
          <div id="new-recipe-ingredients">
            {/* <IngredientNestedForm ingredients={this.state.recipeIngredients} addIngredient={this.addIngredient} /> */}
            { this.state.ingredientComponents .map(ing => ing) }
          </div>
          
          <p onClick={this.addIngredient}>++ Add Ingredient ++</p> <br></br> 
          
          Instructions: <input type="text" onChange={event => this.changeInstructions(event)}></input> <br></br> <br></br>
          
          <input type="submit"></input>
        </form>
    </div>
    );
  }

}

export default NewRecipe