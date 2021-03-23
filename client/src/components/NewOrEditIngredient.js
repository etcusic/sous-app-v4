import React, { Component } from 'react';
import NewIngredientRow from './NewIngredientRow'
import { sendNewIngredient } from '../actions';

class NewOrEditIngredient extends Component {

    constructor(){
        super()
        this.state = {
            ingredients: [{category: "", name: "name", unit: "", cost_per_unit: 0, quantity: 0}]
        }
    }

    // componentDidMount(){
    //     console.log("needs to be set up for edit as well")
    // }

    changeIngredient = (event, index, key) => {
        event.preventDefault()
        let ingredients = [...this.state.ingredients]
        ingredients[index][key] = event.target.value
        console.log(index)
        console.log(key)
        console.log(event.target.value)
        console.log(ingredients)
        this.setState({ ingredients: ingredients })
    }

  render() {
    return (
    <div id="new-ingredient-form">
        <h3>Add New Ingredient:</h3> 
        {/* NEEDS AN ADD INGREDIENT BUTTON FOR MULTIPLE INGREDIENTS */}
        <form onSubmit={ event => sendNewIngredient(event, 'POST', this.state.newIngredient, this.props.showPantry) }>
            { this.state.ingredients.map((ing, index) => <NewIngredientRow keyId={ index } ingredient={ ing } changeIngredient={ this.changeIngredient } />)}
            <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default NewOrEditIngredient