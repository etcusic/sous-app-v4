import React, { Component } from 'react';
import NewIngredient from './NewIngredient'

class NewRecipe extends Component {

  // STANDARDIZE FORM TO HANDLE EDIT RECIPE AS WELL

  constructor(){
    super()
    this.state = {
      newIngredients: [],
      recipeName: "",
      recipeServings: 0,
      recipeIngredients: [],
      recipeInstructions: ""
    }
  }

  componentDidMount(){
    this.setState({
      newIngredients: [<NewIngredient ingredients={this.props.ingredients}/>]
    })
  }

  sendRecipe = (event) => {
    event.preventDefault()
    console.log("send recipe")
    console.log(this.state)
      // const configObject = {
      //     method: 'POST',
      //     headers: {
      //         "Content-Type": 'application/json',
      //         "Accept": 'application/json'
      //     },
      //     body: JSON.stringify(recipe)
      // }

      // fetch(`http://localhost:3000/users/1/recipes`, configObject)
      //     .then(function(response){
      //         return response.json()
      //     })
      //     .then(function(json){
      //         // do I need to do something with the data here ??
      //       console.log(json)
      //       console.log("should I do something here??")
      //     })
          // add catch
  }

  addIngredient = () => {
    let obj = this.state.newIngredients
    obj.push(<NewIngredient ingredients={this.props.ingredients} />)
    this.setState({
      newIngredients: obj
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

  changeIngredients = event => {
    obj = event.target.value
    console.log(obj)
    // this.setState({
    //   recipeIngredients: event.target.value
    // })
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
            { this.state.newIngredients.map(ing => ing) }
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