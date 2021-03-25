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
                { console.log(this.props.weeklyMenu )}
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
             <button onClick={ this.listOfWeeks }>Check Date</button>
        </div>
       
        <br></br>
        <div>
            <button onClick={ this.props.weeklyMenuForm }>Edit Menu</button>
        </div>
    </div>
    );
  }

}

export default WeeklyMenu