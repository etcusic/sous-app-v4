import React, { Component } from 'react';

class NewIngredientRow extends Component {

  render() {
    return (
        <div keyId={ `new-ingredient-${this.props.keyId}` }>
            
            <div>
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
                <input onChange={ event => this.props.changeIngredient(event, this.props.keyId, "name") }>{ this.props.ingredient.name }</input>
            </div>
            
            <div>
                <select onChange={ event => this.props.changeIngredient(event, this.props.keyId, "unit") }>
                    <option value="invalid">--</option>
                    <option value="oz">oz</option>
                    <option value="pcs">pcs</option>
                </select>
            </div>
            
            <div>
                <input onChange={ event => this.props.changeIngredient(event, this.props.keyId, "cost_per_unit") }>{ this.props.ingredient.cost_per_unit }</input>
            </div>
            
            <div>
                <input type="number" onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }>{ this.props.ingredient.quantity }</input>
            </div>

        </div>
    );
  }

}

export default NewIngredientRow