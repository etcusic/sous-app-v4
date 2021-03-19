import React, { Component } from 'react';

class AddIngredient extends Component {

    constructor(){
        super()
        this.state = {
            currentIngredient: {id: 0, name: "", quantity: 0, unit: ""},
            ingredients: []
        }
    }

    componentDidMount(){
        console.log(this.props.ingredientId)
        this.setState({
            currentIngredient: this.props.ing,
            ingredients: this.props.pantry["all"]
        })
    }

    showCategory = (event) => {
        this.setState({
            ingredients: this.props.pantry[event.target.value]
        })
    }

    setIngredient = (event) => {
        let ing = this.state.ingredients.find(ing => ing.id == event.target.value)
        this.setState({ currentIngredient: ing })
    }

    changeQuantity = (event) => {
        // console.log(this.state.currentIngredient)
        let ing = Object.assign({}, this.state.currentIngredient)
        ing.quantity = event.target.value
        this.setState({ currentIngredient: ing })
    }

  render() {
    return (
    <div>
        Ingredient: 
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

        <select name="ingredients" id="new-recipe-ingredients" onChange={event => this.setIngredient(event) }>
            { this.state.ingredients.map(ingredient => <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ `${ingredient.name} - ${ingredient.unit}` }</option>)}
        </select>

        <input type ="number" value={ this.state.currentIngredient.quantity } onChange={ event => this.changeQuantity(event) }></input>
        
        <button onClick={ event => this.props.addIngredient(event, this.state.currentIngredient) }>+ add +</button>
    </div>
    );
  }

}

export default AddIngredient