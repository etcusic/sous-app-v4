import React, { Component } from 'react';
import { sendWeeklyMenu } from '../actions';

class WeeklyMenuForm extends Component {

    constructor(){
        super()
        this.state = {
            recipes: [],
            weeklyMenu: []
        }
    }

    // move fetch to actions
    componentDidMount(){
        fetch(`http://localhost:3001/users/${this.props.userId}/recipes`)
        .then(resp =>  resp.json())
        .then(recipes => {
            this.setState({
                recipes: recipes,
                weeklyMenu: this.props.weeklyMenu
            })
        })
    }

    changeMenu = (event, index, cat) => {
        let menu = [...this.state.weeklyMenu]
        menu[index][cat] = event.target.value
        this.setState({
            weeklyMenu: menu
        })
    }

    checkState = () => {
        console.log(this.state.weeklyMenu)
    }

  render() {
    return (
    <div>
        <h2>Edit Weekly Menu:</h2>
        <form onSubmit={ event => sendNewIngredient(event, this.props.userId, this.props.method, this.state.weeklyMenu, this.props.updateMenu) }>
            <table>
                <thead>
                    <tr>
                        <th>Day:</th>
                        <th>Dish:</th>
                        <th>Quantity:</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.weeklyMenu.map((obj, index) => {
                        return (
                            <tr>
                                <td>{ obj.day }</td>
                                <td>
                                    <select onChange={ event => this.changeMenu(event, index, "name") }>
                                        <option value="invalid">-------</option>
                                        { this.state.recipes.map((recipe, i) => {
                                            if (recipe.name === obj.name){
                                                return <option selected value={ recipe.name }>{ recipe.name }</option>
                                            } else {
                                                return <option value={ recipe.name }>{ recipe.name }</option>
                                            }
                                        }) }
                                    </select>
                                </td>
                                <td><input type ="number" value={ obj.quantity } onChange={ event => this.changeMenu(event, index, "quantity")}></input></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={ this.checkState }>Check State</button>
            <br></br><br></br>
            <input type="submit"></input>
        </form>
        
    </div>
    );
  }

}

export default WeeklyMenuForm