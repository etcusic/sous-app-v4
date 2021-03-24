import React, { Component } from 'react';

class WeeklyMenu extends Component {

  render() {
    return (
    <div>
        <h2>Weekly Menu:</h2>
        <table>
            <thead>
                <tr>
                    <th>Day:</th>
                    <th>Dish:</th>
                    <th>Quantity:</th>
                </tr>
            </thead>
            <tbody>
                {/* { Object.keys(this.props.weeklyMenu).map(key => { */}
                { this.props.weeklyMenu.map( obj => {
                    return (
                            <tr>
                                <td>{obj.day} </td>
                                <td>{obj.name === "" ? "--------" : obj.name}</td>
                                <td>{obj.quantity}</td>
                            </tr>
                        )
                })}
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