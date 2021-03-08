import React, { Component } from 'react';

class UserProfile extends Component {

  render() {
    return (
    <div>
        User Profile Component
        <p onClick={this.props.showPantry}>Pantry |</p>
        <p onClick={this.props.showRecipes}>| Recipes |</p>
        <p onClick={this.props.newRecipe}>| Create New Recipe</p>
    </div>
    );
  }

}

export default UserProfile
