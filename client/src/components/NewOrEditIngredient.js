import React, { Component } from 'react';
import NewIngredientRow from './NewIngredientRow'

class NewOrEditIngredient extends Component {

    constructor(){
        super()
        this.state = {
            ingredients: [{category: "", name: "name", unit: "", cost_per_unit: 0, quantity: 0}]
        }
    }

    componentDidMount(){
        console.log("needs to be set up for edit as well")
    }

  render() {
    return (
    <div>
        Add New Ingredient: 
        {/* NEEDS AN ADD INGREDIENT BUTTON FOR MULTIPLE INGREDIENTS */}
        <form onSubmit={ event => sendNewIngredient(event, 'POST', this.state.newIngredient, this.props.showPantry) }>

            <table>
                <thead>
                    <tr>
                        <td>Category:</td>
                        <td>Name:</td>
                        <td>Unit of Measurement:</td>
                        <td>Cost Per Unit:</td>
                        <td>Quantity:</td>
                    </tr>
                </thead>
                <tbody>
                    { this.state.ingredients.map(ing => <NewIngredientRow ingredient={ ing } />) }
                </tbody>
            </table>
            <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default NewOrEditIngredient