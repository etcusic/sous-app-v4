import React, { Component } from 'react';

class Recipes extends Component {

  constructor(){
    super()
    this.state = {
        recipes: []
    }
  }

componentDidMount(){
    fetch(`http://localhost:3001/users/1/recipes`)
    .then(resp =>  resp.json())
    .then(recipes => {
        this.setState({
        recipes: recipes
        })
    })
}

  render() {
    return (
    <div>
        <h2>Recipes:</h2>
        <table>
          <thead>
            <tr>
              <th>Title: </th>
              <th>Servings: </th>
            </tr>
          </thead>
          <tbody>
            { this.state.recipes.map(recipe => <tr key={`recipe-${recipe.id}`}><td onClick={ () => this.props.showRecipe(recipe.id) }>{recipe.name}</td><td>{recipe.servings}</td></tr>) }
          </tbody>      
        </table>
    </div>
    );
  }

}

export default Recipes