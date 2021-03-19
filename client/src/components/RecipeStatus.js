import React, { Component } from 'react'

class RecipeStatus extends Component {

  componentDidMount(){
    console.log(this.props.ingredients)
  }

  render() {
    return (
    <div>
    {console.log(this.props)}
        <table>
          <tbody>
            { this.props.ingredients.map((ingredient, index) => {
                return (
                    <tr key={`recipe-ingredient-${ingredient.id}`}>
                        <td>* {ingredient.name}</td>
                        <td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td>
                        <td><button onClick={event => this.props.removeIngredient(event, index)}>Remove</button></td>
                    </tr>)
            })}
          </tbody>
        </table>
    </div>
    );
  }

}

export default RecipeStatus