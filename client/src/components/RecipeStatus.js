import React, { Component } from 'react'

class RecipeStatus extends Component {

  render() {
    return (
    <div>
    {console.log(this.props)}
        <table>
          <tbody>
            { this.props.ingredients.map((ingredient, index) => {
                return (
                    <tr key={`recipe-ingredient-${ingredient.id}`}>
                        <td><button onClick={event => this.props.removeIngredient(event, index)}> - </button></td>
                        <td>- {ingredient.name}</td>
                        <td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td>
                    </tr>)
            })}
          </tbody>
        </table>
    </div>
    );
  }

}

export default RecipeStatus