import React, { Component } from 'react'

class ShowIngredientsTable extends Component {

  componentDidMount(){
    console.log(this.props.recipe)
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
                        <td>Ingredient Name</td>
                        <td>Quantity</td>
                        <td>Remove</td>
                        {/* <td>{ingredient.name}</td>
                        <td>{` -  ${ingredient.quantity}  ${ingredient.unit}`}</td> */}
                    </tr>)
            })}
          </tbody>
        </table>
    </div>
    );
  }

}

export default ShowIngredientsTable