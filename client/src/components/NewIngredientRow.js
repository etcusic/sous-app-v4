import React, { Component } from 'react';

class NewIngredientRow extends Component {

  render() {
    return (
        <div keyId={ `new-ingredient-${this.props.keyId}` }>
            <div>
                <label>Category: </label>
                <select onChange={ event => this.props.changeIngredient(event, this.props.keyId, "category") }>
                    <option value="invalid">--</option>
                    { this.props.categories.map(cat => {
                        if (cat === this.props.ingredient.category){
                            return <option selected value={ cat }>{ cat }</option>
                        } else {
                            return <option value={ cat }>{ cat }</option>
                        }
                    })}
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
                    { this.props.units.map(unit => {
                        if (unit === this.props.ingredient.unit){
                            return <option selected value={ unit }>{ unit }</option>
                        } else {
                            return <option value={ unit }>{ unit }</option>
                        }
                    })}
                </select>
            </div>
            
            <div>
                <label>Cost per Unit: </label>
                <input placeholder={ this.props.ingredient.cost_per_unit } onChange={ event => this.props.changeIngredient(event, this.props.keyId, "cost_per_unit") }></input>
            </div>
            
            <div>
                <label>Quantity: </label>
                <input placeholder={ this.props.ingredient.quantity } type="number" onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }></input>
            </div>

            <br></br><br></br>

        </div>
    );
  }

}

export default NewIngredientRow