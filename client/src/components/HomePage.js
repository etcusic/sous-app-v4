import React, { Component } from 'react';
import UserProfile from './UserProfile.js'
import Pantry from './Pantry.js'
import Recipes from './Recipes.js'
import Recipe from './Recipe.js'
import NewRecipe from './NewRecipe.js'
import EditRecipe from './EditRecipe.js'

class HomePage extends Component {
  
  constructor(){
    super()
    this.state = {
        userId: 0,
        userName: "",
        view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } newRecipe={ this.newRecipe } />,
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
      this.setState({
          view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } newRecipe={ this.newRecipe } />
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
        view: <Recipe recipe={recipe} pantry={this.state.pantry} />
      })
    })
  }

  newRecipe = () => {
    this.setState({
        view: <NewRecipe userId={this.state.userId} ingredients={ this.state.pantry } showRecipe={ this.showRecipe }/>
    })
  } 

  editRecipe = () => {
    this.setState({
      view: <EditRecipe />
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
