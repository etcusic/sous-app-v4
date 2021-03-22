import React, { Component } from 'react';
import UserProfile from './UserProfile.js'
import Pantry from './Pantry.js'
import Recipes from './Recipes.js'
import ShowRecipe from './ShowRecipe.js'
import RecipeForm from './RecipeForm.js'
import Placeholder from './Placeholder.js'

class HomePage extends Component {
  
  constructor(){
    super()
    this.state = {
        userId: 0,
        userName: "",
        pantryId: 0,
        pantry: [],
        view: <Placeholder />
    }
  }

  // remove hard coded users route when a user sign in is added
  componentDidMount(){
    this.profilePage()
    fetch(`http://localhost:3001/users/1`)
    .then(resp =>  resp.json())
    .then(user => {
      this.setState({
        userId: user.id,
        userName: user.name,
        pantryId: user.pantry_id,
        pantry: user.pantry
      })
    })
  }

  profilePage = () => {
    const emptyRecipe = {name: "", servings: 0, instructions: "", ingredients: [{id: 0, name: "", quantity: 0, unit: ""}]}
      this.setState({
          view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } recipeForm={ () => this.recipeForm(emptyRecipe, 'POST') } />
      })
  }

  showPantry = () => {
    console.log(this.state)
    const pantry = {
      "all": this.state.pantry,
      "proteins": this.state.pantry.filter(x => x.category === "proteins"),
      "dried goods": this.state.pantry.filter(x => x.category === "dried goods"),
      "produce": this.state.pantry.filter(x => x.category === "produce"),
      "dairy": this.state.pantry.filter(x => x.category === "dairy"),
      "frozen goods": this.state.pantry.filter(x => x.category === "frozen goods"),
      "condiments": this.state.pantry.filter(x => x.category === "condiments"),
      "spices": this.state.pantry.filter(x => x.category === "spices")
    }
    this.setState({
        view: <Pantry 
          pantryId={ this.state.pantryId } 
          pantry={ pantry }
          showPantry={ this.showPantry }
        />
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
      console.log(recipe)
      this.setState({
        view: <ShowRecipe recipe={recipe} pantry={this.state.pantry} recipeForm={ () => this.recipeForm(recipe, 'PATCH') } />
      })
    })
  }

  recipeForm = (recipe, routeMethod) => {
    const pantry = [{id: 0, name: "", quantity: 0, unit: ""}, ...this.state.pantry]
    this.setState({
      view: <RecipeForm 
        userId={ this.state.userId } 
        recipe={ recipe } 
        pantry={ pantry } 
        showRecipe={ this.showRecipe } 
        routeMethod={ routeMethod }
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
