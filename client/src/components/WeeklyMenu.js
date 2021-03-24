import React, { Component } from 'react';

class WeeklyMenu extends Component {

  render() {
    return (
    <div>
        <h2>Weekly Menu:</h2>
        <ul>
            { Object.keys(this.props.weeklyMenu).map((key, i) => {
                console.log(key)
                console.log(this.props.weeklyMenu[key])
                if (this.props.weeklyMenu[key] === ""){
                    return <li>{key}: --------</li>
                } else {
                    return <li>{key}: {this.props.weeklyMenu[key]}</li>
                }
            })}
        </ul>
        
        <div>
            <button onClick={ this.props.weeklyMenuForm }>Edit Menu</button>
        </div>
    </div>
    );
  }

}

export default WeeklyMenu