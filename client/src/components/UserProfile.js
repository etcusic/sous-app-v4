import React, { Component } from 'react';

class UserProfile extends Component {

  render() {
    return (
    <div>
        <ul>
            <li onClick={this.props.showPantry}>Pantry </li>
            <li onClick={this.props.showRecipes}>Recipes </li>
            <li onClick={this.props.recipeForm}>Create New Recipe </li>
        </ul>
        <br></br>
    </div>
    );
  }

}

export default UserProfile
