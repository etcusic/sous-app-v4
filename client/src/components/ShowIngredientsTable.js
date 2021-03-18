import React, { Component } from 'react'
import { calculateRawCost } from '../actions/helpers'
import { costPerServing } from '../actions/helpers'
import { enoughInPantry } from '../actions/helpers'

class ShowIngredientsTable extends Component {

  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
    <div>
    {console.log(this.props)}
        <table>
          <thead>
            <tr>
              <th>Ingredients: </th>
              <th>Quantity: </th>
            </tr>
          </thead>
          <tbody>
            { this.props.recipe.ingredients.map(ingredient => {
                return (
                    <tr key={`recipe-ingredient-${ingredient.id}`}>
                        <td>{ingredient.name}</td>
                        <td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td>
                    </tr>)
            })}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <div>Estimated Raw Cost: ${ calculateRawCost(this.props.recipe.ingredients).toFixed(2) }</div>
        <br></br>
        <br></br>
        <div>Estimated Cost Per Serving: ${ costPerServing(this.props.recipe).toFixed(2) }</div>
        <br></br>
        <br></br>
        <div>{ enoughInPantry(this.props.recipe.ingredients, this.props.pantry) }</div>
    </div>
    );
  }

}

export default ShowIngredientsTable