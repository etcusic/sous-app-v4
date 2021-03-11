import React, { Component } from 'react';
import UserProfile from './UserProfile.js'
import Pantry from './Pantry.js'
import Recipes from './Recipes.js'
import Recipe from './Recipe.js'
import NewRecipe from './NewRecipe.js'

class HomePage extends Component {
  
  constructor(){
    super()
    this.state = {
        user: "",
        view: <UserProfile showPantry={ this.showPantry } showRecipes={ this.showRecipes } newRecipe={ this.newRecipe } />,
        ingredients: []
    }
  }

  // remove hard coded users route when a user sign in is added
  componentDidMount(){
    fetch(`http://localhost:3001/users/1`)
    .then(resp =>  resp.json())
    .then(user => {
      this.setState({
        user: user.name,
        ingredients: user.ingredients
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
        view: <Pantry ingredients={ this.state.ingredients }/>
    })
  }

  showRecipes = () => {
    this.setState({
        view: <Recipes showRecipe={this.showRecipe} />
    })
  }

  showRecipe = (id) => {
    fetch(`http://localhost:3001/users/1/recipes/${id}`)
    .then(resp =>  resp.json())
    .then(recipe => {
        console.log(recipe)
      this.setState({
        view: <Recipe recipe={recipe} />
      })
    })
  }

  newRecipe = () => {
    this.setState({
        view: <NewRecipe ingredients={ this.state.ingredients } showRecipe={ this.showRecipe }/>
    })
  } 

  render() {
    return (
    <div>
        <header>
            <h1 onClick={ this.profilePage }>{ this.state.user }</h1>
        </header>

        <body>
            { this.state.view }
        </body>
    </div>
    );
  }

}

export default HomePage
