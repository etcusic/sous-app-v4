import React, { Component } from 'react';
import { sendWeeklyMenu } from '../actions';

class WeeklyMenuForm extends Component {

    constructor(){
        super()
        this.state = {
            weeklyMenuId: 0,
            dailyMenus: [],
            recipes: [],
            mealCategories: ["--", "breakfast", "lunch", "dinner"]
        }
    }

    // move fetch to actions
    componentDidMount(){
        fetch(`http://localhost:3001/users/${this.props.userId}/recipes`)
        .then(resp =>  resp.json())
        .then(recipes => {
            let obj = {0: "--------"}
            recipes.forEach(recipe => obj[recipe.id] = recipe.name)
            this.setState({
                weeklyMenuId: this.props.weeklyMenu.id,
                dailyMenus: this.props.weeklyMenu.daily_menus,
                recipes: obj
            })
        })
    }

    changeMenu = (event, i, j, cat) => {
        let menu = [...this.state.dailyMenus]
        console.log(menu[i].meals[j])
        menu[i].meals[j][cat] = event.target.value
        this.setState({
            dailyMenus: menu
        })
    }

    checkState = () => {
        console.log(this.state)
    }

  render() {
    return (
    <div>
        <h2>Edit Weekly Menu:</h2>
        {/* <form onSubmit={ event => sendWeeklyMenu(event, this.props.userId, this.props.method, this.state.weeklyMenu, this.props.updateMenu) }> */}
        <form>
            <table>
                <thead>
                    <tr>
                        <th>Day:</th>
                        <th>Meal:</th>
                        <th>Dish:</th>
                        <th>Quantity:</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.dailyMenus.map((menu, i) => menu.meals.map((meal, j) => {
                        return (
                            <tr>
                                <td>{ menu.date }</td>
                                <td> 
                                    <select>
                                        { this.state.mealCategories.map(cat => {
                                            if (cat === meal.category) {
                                                return <option selected >{ cat }</option>
                                            } else {
                                                return <option>{ cat }</option>
                                            }
                                        })}
                                    </select>
                                </td>
                                <td> 
                                    <select>
                                        { Object.keys(this.state.recipes).map(key => {
                                            if (key === meal.recipe_id) {
                                                return <option selected >{ this.state.recipes[key] }</option>
                                            } else {
                                                return <option>{ this.state.recipes[key] }</option>
                                            }
                                        })}
                                    </select>
                                </td>
                                <td><input type="number" value={ meal.quantity }></input></td>
                            </tr>
                        )
                    })) }
                </tbody>
            </table>
            <br></br><br></br>
            <input type="submit"></input>
        </form> 
        
        <br></br><br></br>
        <button onClick={ this.checkState }>Check State</button>
    </div>
    );
  }

}

export default WeeklyMenuForm