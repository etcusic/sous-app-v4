import React, { Component } from 'react';
import { calculateRawCost } from '../actions/helpers'

class Pantry extends Component {

  constructor(){
      super()
      this.state = {
          ingredients: []
      }
  }

  componentDidMount(){
      this.setState({
          ingredients: this.props.pantry["all"]
      })
  }

  showCategory = (event) => {
    this.setState({
      ingredients: this.props.pantry[event.target.value]
    })
  }

  render() {
    return (
    <div>

        {/* USE A BUTTON INSTEAD TO TRIGGER NEW/EDIT INGREDIENT - make it its own view */}
        {/* <NewOrEditIngredient updatePantry={ this.props.updatePantry } pantryId={ this.props.pantryId } />   */}

        <h2>Pantry: </h2>
        <button onClick={ () => this.props.ingredientForm(this.props.blankIngredient, 'POST') }>Create Ingredient</button>
        <h3>Category: 
          <select onChange={ event => this.showCategory(event) }>
              <option key="category-1" value="all">all</option>
              <option key="category-3" value="proteins">proteins</option>
              <option key="category-5" value="dried goods">dried goods</option>
              <option key="category-2" value="produce">produce</option>
              <option key="category-4" value="dairy">dairy</option>
              <option key="category-6" value="frozen goods">frozen goods</option>
              <option key="category-7" value="condiments">condiments</option>
              <option key="category-8" value="spices">spices</option>
          </select>
        </h3>
        <table>
          <thead>
            <tr>
                <th>Ingredient: </th>
                <th>Quantity: </th>
                <th>Edit:</th>
            </tr>
          </thead>
          <tbody>
            { this.state.ingredients.map(ingredient => <tr key={`pantry-ingredient-${ingredient.id}`}>
                                                        <td>{ingredient.name}</td>
                                                        <td>{`${ingredient.quantity} ${ingredient.unit}`}</td>
                                                        <td><button onClick={() => this.props.ingredientForm(ingredient, 'PATCH')}>edit</button></td>
                                                      </tr>) }
          </tbody>
        </table>
        <br></br>
        <br></br>
        {/* change this to calculate based on what the user wants to see - total, based on category, single ingredient, etc. */}
        <div>Estimated Raw Cost in Pantry: ${ calculateRawCost(this.props.pantry["all"]).toFixed(2) }</div>
        <br></br>
        <br></br>
        
    </div>
    );
  }

}

export default Pantry