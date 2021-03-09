import React, { Component } from 'react';
import NewIngredient from './NewIngredient'

class NewRecipe extends Component {

  constructor(){
    super()
    this.state = {
      newIngredients: []
    }
  }

  componentDidMount(){
    this.setState({
      newIngredients: [<NewIngredient ingredients={this.props.ingredients}/>]
    })
  }

  sendRecipe = (recipe) => {
      const configObject = {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
          },
          body: JSON.stringify(recipe)
      }

      fetch(`http://localhost:3000/users/1/recipes`, configObject)
          .then(function(response){
              return response.json()
          })
          .then(function(json){
              // do I need to do something with the data here ??
            console.log(json)
            console.log("should I do something here??")
          })
          // add catch
  }

  addIngredient = () => {
    let obj = this.state.newIngredients
    obj.push(<NewIngredient ingredients={this.props.ingredients} />)
    this.setState({
      newIngredients: obj
    })
  }

  render() {
    return (
    <div>
        New Recipe:
        <form>
          <div id="new-recipe-ingredients">
            { this.state.newIngredients.map(ing => ing) }
          </div>

          <p onClick={this.addIngredient}>++ Add Ingredient ++</p>
        </form>
    </div>
    );
  }

}

export default NewRecipe