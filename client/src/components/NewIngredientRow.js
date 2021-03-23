import React, { Component } from 'react';

class NewIngredientRow extends Component {

  render() {
    return (
    <tr>

          <select onChange={ event => this.props.changeIngredient(event, "category") }>
              <option value="invalid">--</option>
              <option value="proteins">proteins</option>
              <option value="dried goods">dried goods</option>
              <option value="produce">produce</option>
              <option value="dairy">dairy</option>
              <option value="frozen goods">frozen goods</option>
              <option value="condiments">condiments</option>
              <option value="spices">spices</option>
          </select>

          <input onChange={ event => this.props.changeIngredient(event, "name") }>{ this.props.ingredient.name }</input>

          <select onChange={ event => this.props.changeIngredient(event, "unit") }>
              <option value="invalid">--</option>
              <option value="oz">oz</option>
              <option value="pcs">pcs</option>
          </select>

          <input onChange={ event => this.props.changeIngredient(event, "cost_per_unit") }>{ this.props.ingredient.cost_per_unit }</input>

          <input type="number" onChange={ event => this.props.changeIngredient(event, "quantity") }>{ this.props.ingredient.quantity }</input>

      </tr>
    );
  }

}

export default NewIngredientRow