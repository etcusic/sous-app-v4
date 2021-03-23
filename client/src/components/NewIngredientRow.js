import React, { Component } from 'react';

class NewIngredientRow extends Component {

    constructor(){
        super()
        this.state = {
            ingredient: {category: "", name: "name", unit: "", cost_per_unit: 0, quantity: 0}
        }
    }

    componentDidMount(){
        console.log(this.props.ingredient)
        this.setState({
            ingredient: this.props.ingredient
        })
    }

  render() {
    return (
    <tr>

          <select onChange={ event => this.changeIngredient(event, "category") }>
              <option value="invalid">--</option>
              <option value="proteins">proteins</option>
              <option value="dried goods">dried goods</option>
              <option value="produce">produce</option>
              <option value="dairy">dairy</option>
              <option value="frozen goods">frozen goods</option>
              <option value="condiments">condiments</option>
              <option value="spices">spices</option>
          </select>

          <input placeholder="name" onChange={ event => this.changeIngredient(event, "name") }></input>

          <select onChange={ event => this.changeIngredient(event, "unit") }>
              <option value="invalid">--</option>
              <option value="oz">oz</option>
              <option value="pcs">pcs</option>
          </select>

          <input placeholder="cost per unit" onChange={ event => this.changeIngredient(event, "cost_per_unit") }></input>

          <input type="number" placeholder="quantity" onChange={ event => this.changeIngredient(event, "quantity") }></input>

      </tr>
    );
  }

}

export default NewIngredientRow