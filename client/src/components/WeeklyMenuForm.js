import React, { Component } from 'react';

class WeeklyMenuForm extends Component {

    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/users/${this.props.userId}/recipes`)
        .then(resp =>  resp.json())
        .then(recipes => {
            this.setState({
                recipes: recipes
            })
        })
    }

  render() {
    return (
    <div>
        <h2>Edit Weekly Menu:</h2>
        <table>
            <tbody>
                { Object.keys(this.props.weeklyMenu).map(key => {
                    return (
                        <tr>
                            <td>{ key }</td>
                            <td>
                                <select>
                                    <option value="invalid">-------</option>
                                    { this.state.recipes.map(recipe => {
                                        return <option value={ recipe.name }>{ recipe.name }</option>
                                    }) }
                                </select>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    );
  }

}

export default WeeklyMenuForm