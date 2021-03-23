import React, { Component } from 'react';

class NewIngredientRow extends Component {

  render() {
    return (
        <div keyId={ `new-ingredient-${this.props.keyId}` }>
            <h4>{ `${this.props.keyId + 1}${")"}` }</h4>
            <div>
                <label>Category: </label>
                <select onChange={ event => this.props.changeIngredient(event, this.props.keyId, "category") }>
                    <option value="invalid">--</option>
                    <option value="proteins">proteins</option>
                    <option value="dried goods">dried goods</option>
                    <option value="produce">produce</option>
                    <option value="dairy">dairy</option>
                    <option value="frozen goods">frozen goods</option>
                    <option value="condiments">condiments</option>
                    <option value="spices">spices</option>
                </select>
            </div>
            
            <div>
                <label>Ingredient: </label>
                <input placeholder={ this.props.ingredient.name } onChange={ event => this.props.changeIngredient(event, this.props.keyId, "name") }></input>
            </div>
            
            <div>
                <label>Unit of Measurement: </label>
                <select onChange={ event => this.props.changeIngredient(event, this.props.keyId, "unit") }>
                    <option value="invalid">--</option>
                    <option value="oz">oz</option>
                    <option value="pcs">pcs</option>
                </select>
            </div>
            
            <div>
                <label>Cost per Unit: </label>
                <input onChange={ event => this.props.changeIngredient(event, this.props.keyId, "cost_per_unit") }></input>
            </div>
            
            <div>
                <label>Quantity: </label>
                <input type="number" onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }></input>
            </div>

            <br></br><br></br>

        </div>
    );
  }

}

export default NewIngredientRow