import React, { Component } from 'react';

class Ingredient extends Component {

    constructor(){
        super()
        this.state = {
            pantry: {},
            ingredients: []
        }
    }

    componentDidMount(){
        console.log(this.props.pantry.map(x => x.category))
        const pantry = {
            all: this.props.pantry,
            proteins: this.props.pantry.filter(x => x.category === "proteins"),
            driedGoods: this.props.pantry.filter(x => x.category === "dried goods"),
            produce: this.props.pantry.filter(x => x.category === "produce"),
            dairy: this.props.pantry.filter(x => x.category === "dairy"),
            frozenGoods: this.props.pantry.filter(x => x.category === "frozen goods"),
            condiments: this.props.pantry.filter(x => x.category === "condiments"),
            spices: this.props.pantry.filter(x => x.category === "spices")
        }
        this.setState({
            pantry: pantry,
            ingredients: pantry["all"]
        })
    }

    showCategory = (event) => {
        // event.preventDefault()
        let ingredientsByCategory = [...this.state.pantry[event.target.value]]
        this.setState({
            ingredients: ingredientsByCategory
        })
    }

  render() {
    return (
    <div key={`new-ingredient-${this.props.keyId}`}>
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
        <select>
            <option>- ingredients -</option>
            { this.state.ingredients.map(ing => <option value={ing.id}>{ing.name}</option>) }
        </select>
        {/* <select name="ingredients" id="new-recipe-ingredients" onChange={event => this.props.changeIngredient(event, this.props.keyId, "id") }>
            { this.props.pantry.map(ingredient => {
                if (ingredient.id == this.props.ingredientId){
                    return <option selected key={`ingredient-option-${ingredient.id}`} value={ ingredient.id } >{ `${ingredient.name} - ${ingredient.unit}` }</option>
                } else {
                    return <option key={`ingredient-option-${ingredient.id}`} value={ ingredient.id }>{ `${ingredient.name} - ${ingredient.unit}` }</option>
                }
            })}
        </select> */}
        <input type ="number" value={ this.props.ingredientQuantity } onChange={ event => this.props.changeIngredient(event, this.props.keyId, "quantity") }></input>
        <button onClick={ event => this.props.removeIngredient(event, this.props.keyId) }>- remove -</button>
    </div>
    );
  }

}

export default Ingredient

