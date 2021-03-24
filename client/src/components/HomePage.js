import React, { Component } from 'react';
import Placeholder from './Placeholder.js'
import UserProfile from './UserProfile.js'
import Pantry from './Pantry.js'
import IngredientForm from './IngredientForm.js'
import Recipes from './Recipes.js'
import ShowRecipe from './ShowRecipe.js'
import RecipeForm from './RecipeForm.js'
import WeeklyMenu from './WeeklyMenu.js'
import WeeklyMenuForm from './WeeklyMenuForm.js'

class HomePage extends Component {
  
  constructor(){
    super()
    this.state = {
        userId: 0,
        userName: "",
        pantryId: 0,
        pantry: [],
        view: <Placeholder />,
        weeklyMenu: []
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
        pantry: user.pantry,
        weeklyMenu: [
          // change to => {:day, :meals (array of recipe ids) } => meals = [{:meal (dinner), :recipe_id, :quantity}, {...}, {...}]
          {day: "Monday", recipeId: 0, name:"", quantity: 0},
          {day: "Tuesday", recipeId: 0, name:"", quantity: 0},
          {day: "Wednesday", recipeId: 0, name:"", quantity: 0},
          {day: "Thursday", recipeId: 0, name:"", quantity: 0},
          {day: "Friday", recipeId: 0, name:"", quantity: 0},
          {day: "Saturday", recipeId: 0, name:"", quantity: 0},
          {day: "Sunday", recipeId: 0, name:"", quantity: 0}
        ]
        // weeklyMenu: {"Monday": "", "Tuesday": "", "Wednesday": "", "Thursday": "", "Friday": "", "Saturday": "", "Sunday": ""}
      })
    })
  }

  profilePage = () => {
    const emptyRecipe = {name: "", servings: 0, instructions: "", ingredients: [{id: 0, name: "", quantity: 0, unit: ""}]}
      this.setState({
          view: <UserProfile 
                  showPantry={ this.showPantry } 
                  showRecipes={ this.showRecipes } 
                  recipeForm={ () => this.recipeForm(emptyRecipe, 'POST') }
                  weeklyMenu={ this.weeklyMenu } />
      })
  }

  updatePantry = (ingredients) => {
    new Promise((resolve, reject) => this.setState({ pantry: ingredients })).then(this.showPantry())
  }

  showPantry = () => {
    console.log(this.state)
    // NEED TO PUT THIS SOMEWHERE ELSE
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
    const blankIngredient = {id: 0, category: "", name: "name", unit: "", cost_per_unit: 0, quantity: 0}
    this.setState({
        view: <Pantry 
          pantryId={ this.state.pantryId } 
          pantry={ pantry }
          blankIngredient={ blankIngredient }
          updatePantry={ this.updatePantry }
          ingredientForm={ this.ingredientForm }
        />
    })
  }

  ingredientForm = (ingredient, reaction) => {
    const categories = ["proteins", "dried goods", "produce", "dairy", "frozen goods", "condiments", "spices"]
    const units = ["oz", "pcs"]
    this.setState({
      view: <IngredientForm 
      ingredient={ ingredient } 
      updatePantry={ this.updatePantry } 
      pantryId={ this.state.pantryId } 
      categories={ categories } 
      units={ units}
      reaction={ reaction } /> 
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

  weeklyMenu = () => {
    // PASS IN MENU PARAMATER - NEED TO UPDATE STATE, THEN SHOW COMPONENT - will redux solve this??
    // find recipes that match menu id's and send those specific recipes
    this.setState({ view: <WeeklyMenu weeklyMenu={ this.state.weeklyMenu } weeklyMenuForm={ () => this.weeklyMenuForm(this.state.weeklyMenu) } />})
  }

  updateMenu = (menu) => {
    console.log(menu)
    new Promise(() => this.setState({ weeklyMenu: menu })).then(this.weeklyMenu())
  }

  weeklyMenuForm = (menu) => {
    this.setState({ view: <WeeklyMenuForm 
                              weeklyMenu={ menu } 
                              userId={ this.state.userId } 
                              method={ 'POST' }
                              updateMenu={ this.updateMenu }
                          />})
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
