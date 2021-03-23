import React, { Component } from 'react';

class NewOrEditIngredient extends Component {

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
    <div>
        Add New Ingredient: 
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
                    
                </tbody>
            </table>

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

          <input type="submit"></input>
        </form>
      </div>
    );
  }

}

export default NewOrEditIngredient