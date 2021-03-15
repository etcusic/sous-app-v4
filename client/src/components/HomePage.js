import React, { Component } from 'react';
import UserProfile from './UserProfile.js'
import Pantry from './Pantry.js'
import Recipes from './Recipes.js'
import ShowRecipe from './ShowRecipe.js'
import RecipeForm from './RecipeForm.js';
import { createRecipe } from '../actions/index'
import { updateRecipe } from '../actions/index'

class HomePage extends Component {
  
  constructor(){
    const emptyRecipe = {name: "", servings: 0, instructions: "", ingredients: [{id: 1, name: "", quantity: 0}]}
    super()
    this.state = {
        userId: 0,
        userName: "",
        view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } recipeForm={ () => this.recipeForm(emptyRecipe) } />,
        pantry: []
    }
  }

  // remove hard coded users route when a user sign in is added
  componentDidMount(){
    fetch(`http://localhost:3001/users/1`)
    .then(resp =>  resp.json())
    .then(user => {
      this.setState({
        userId: user.id,
        userName: user.name,
        pantry: user.pantry
      })
    })
  }

  profilePage = () => {
    const emptyRecipe = {name: "", servings: 0, instructions: "", ingredients: []}
      this.setState({
          view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } recipeForm={ () => this.recipeForm(emptyRecipe, createRecipe) } />
      })
  }

  showPantry = () => {
    this.setState({
        view: <Pantry userId={this.state.userId} ingredients={ this.state.pantry }/>
    })
  }

  showRecipes = () => {
    this.setState({
        view: <Recipes userId={this.state.userId} showRecipe={this.showRecipe} />
    })
  }

  // move fetch to actions so that I can show a recipe when it's been created without sending another fetch request
  showRecipe = (id) => {
    fetch(`http://localhost:3001/users/${this.state.userId}/recipes/${id}`)
    .then(resp =>  resp.json())
    .then(recipe => {
      this.setState({
        // view: <ShowRecipe recipe={recipe} pantry={this.state.pantry} editRecipe={ this.editRecipe } />
        view: <ShowRecipe recipe={recipe} pantry={this.state.pantry} recipeForm={ () => this.recipeForm(recipe, updateRecipe) } />
      })
    })
  }

  recipeForm = (recipe, action) => {
    this.setState({
      view: <RecipeForm 
        userId={ this.state.userId } 
        recipe={ recipe } 
        ingredients={ this.state.pantry } 
        showRecipe={ this.showRecipe } 
        sendRecipeData={ action }
      />
    })
  }

  render() {
    return (
        <div>
          <header>
              <h1 onClick={ this.profilePage }>{ this.state.userName }</h1>
          </header>
          <main>
            { this.state.view }
          </main>
        </div>
    );
  }

}

export default HomePage
