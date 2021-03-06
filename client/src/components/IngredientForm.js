import React, { Component } from 'react';
import NewIngredientRow from './NewIngredientRow'
import { sendNewIngredient } from '../actions';

class NewOrEditIngredient extends Component {

    constructor(){
        super()
        this.state = {
            ingredients: []
        }
    }

    componentDidMount(){
        console.log(this.props.ingredient)
        this.setState({
            ingredients: [this.props.ingredient]
        })
    }

    changeIngredient = (event, index, key) => {
        event.preventDefault()
        let ingredients = [...this.state.ingredients]
        ingredients[index][key] = event.target.value
        this.setState({ ingredients: ingredients })
    }

    // addIngredient = (event) => {
    //     event.preventDefault()
    //     const emptyIngredient = {category: "", name: "name", unit: "", cost_per_unit: 0, quantity: 0, pantry_id: this.props.pantryId}
    //     let ings = [...this.state.ingredients]
    //     ings.push(emptyIngredient)
    //     this.setState({ ingredients: ings })
    // }

  render() {
    return (
    <div id="new-ingredient-form">
        <h3>Add New Ingredient:</h3> 
        {/* NEEDS TO ACCOMODATE EDIT AS WELL */}
        <form onSubmit={ event => sendNewIngredient(event, this.props.reaction, this.state.ingredients, this.props.pantryId, this.props.updatePantry) }>
            { this.state.ingredients.map((ing, index) => <NewIngredientRow 
                                                            keyId={ index } 
                                                            ingredient={ ing } 
                                                            units = { this.props.units }
                                                            categories={ this.props.categories } 
                                                            changeIngredient={ this.changeIngredient } />
            )}
            {/* <button onClick={ this.addIngredient }>Add Ingredient</button> */}
            <br></br>
            <br></br>
            <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default NewOrEditIngredient