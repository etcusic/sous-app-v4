import React, { Component } from 'react';

class WeeklyMenuForm extends Component {

    constructor(){
        super()
        this.state = {
            recipes: [],
            weeklyMenu: {}
        }
    }

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

    changeMenu = (event, key) => {
        let menu = Object.assign({}, this.state.weeklyMenu)
        menu[key] = this.state.recipes[event.target.value]
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
        <table>
            <tbody>
                { Object.keys(this.state.weeklyMenu).map(key => {
                    return (
                        <tr>
                            <td>{ key }</td>
                            <td>
                                <select onChange={ event => this.changeMenu(event, key) }>
                                    <option value="invalid">-------</option>
                                    { this.state.recipes.map((recipe, index) => {
                                        if (recipe.name === this.state.weeklyMenu[key].name){
                                            return <option selected value={ index }>{ recipe.name }</option>
                                        } else {
                                            return <option value={ index }>{ recipe.name }</option>
                                        }
                                        
                                    }) }
                                </select>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={ this.checkState }>Check State</button>
            <br></br><br></br>
            <button onClick={ () => this.props.updateMenu(this.state.weeklyMenu) }>Update Menu</button>
    </div>
    );
  }

}

export default WeeklyMenuForm