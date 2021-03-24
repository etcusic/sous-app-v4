import React, { Component } from 'react';

class WeeklyMenu extends Component {

  render() {
    return (
    <div>
        <h2>Weekly Menu:</h2>
        <table>
            <tbody>
                { Object.keys(this.props.weeklyMenu).map(key => {
                    return (
                            <tr>
                                <td>{key}: </td>
                                <td>{this.props.weeklyMenu[key] === "" ? "--------" : this.props.weeklyMenu[key].name}</td>
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