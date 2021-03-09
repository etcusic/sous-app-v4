import React, { Component } from 'react';

class NewRecipe extends Component {

  sendRecipe (recipe) {
      const configObject = {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
          },
          body: JSON.stringify(recipe)
      }

      fetch(`http://localhost:3000/users/1/recipes`, configObject)
          .then(function(response){
              return response.json()
          })
          .then(function(json){
              // do I need to do something with the data here ??
            console.log(json)
            console.log("should I do something here??")
          })
          // add catch
  }

  

  render() {
    return (
    <div>
        New Recipe:
        <form>
          <div id="new-recipe-ingredients">
            <select name="ingredients" id="new-recipe-ingredients">
                { this.props.ingredients.map(ingredient => <option placeholder="ingredient" value={ ingredient.name }>{ ingredient.name }</option>)}
            </select>
            <input type ="number"></input>
            <input type ="text" placeholder="unit"></input> <br></br>
          </div>
          

          <p>++ Add Ingredient ++</p>
        </form>
    </div>
    );
  }

}

export default NewRecipe