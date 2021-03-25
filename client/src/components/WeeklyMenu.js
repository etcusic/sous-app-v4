import React, { Component } from 'react';
import { fetchWeeklyMenu } from '../actions/index.js'

class WeeklyMenu extends Component {

    constructor(){
        super()
        this.state = {
            week: {},
            recipes: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/users/${this.props.userId}/recipes`)
        .then(resp =>  resp.json())
        .then(recipes => {
            let obj = {0: "--------"}
            recipes.forEach(recipe => obj[recipe.id] = recipe.name)
            this.setState({ 
                week: this.props.thisMonth[0],
                recipes: obj
            })
        })
    }

    changeWeek = (event) => {
        console.log(event.target.value)
        let newWeek = this.props.thisMonth.find(w => w.id == event.target.value)
        console.log(newWeek)
        this.setState({ week: newWeek })
    }

  render() {
    return (
    <div>
        <h2>Weekly Menu:</h2>
        <div>
        { console.log(this.props.thisMonth) }
            <select onChange={ event => this.changeWeek(event) }>
                { this.props.thisMonth.map((week, i) => {
                    return <option value={ week.id }>{ `${week.days[0]} - ${week.days[6]}` }</option>
                })}
            </select>
            <button onClick={ () => fetchWeeklyMenu(this.props.userId, this.state.week.id, this.props.setMenu) }>Submit</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Day:</th>
                    <th>Dish:</th>
                    <th>Quantity:</th>
                </tr>
            </thead>
            <tbody>
                { console.log(this.props.weeklyMenu )}
                { this.props.weeklyMenu.daily_menus.map( menu => menu.meals.map( meal => {
                        return (
                                <tr>
                                    <td>{menu.date} </td>
                                    <td>{this.state.recipes[meal.recipe_id]}</td>
                                    <td>{meal.quantity}</td>
                                </tr>
                            )
                }))}
            </tbody>
            
        </table>
        <br></br>
        <div>
            <button onClick={ this.props.weeklyMenuForm }>Edit Menu</button>
        </div>
    </div>
    );
  }

}

export default WeeklyMenu