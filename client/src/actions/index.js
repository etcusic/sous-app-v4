export const sendRecipeData = (event, method, recipe, userId, reaction) => {
    event.preventDefault()
    console.log("send recipe")
    console.log(recipe)
    let id = recipe.id > 0 ? `/${recipe.id}` : ""
    const route = `http://localhost:3001/users/${userId}/recipes` + id

    const configObject = {
        method: method,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(recipe)
    }
    fetch(route, configObject)
      .then(response => response.json())
      .then(json => reaction(json.id))
      // add catch
}

export const sendNewIngredient = (event, method, ingredients, reaction) => {
    // check for valid inputs - name, category, unit, cost_per_unit
    event.preventDefault()
    const route = `http://localhost:3001/new_ingredient`
    const configObject = {
        method: method,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(ingredients)
    }

    fetch(route, configObject)
      .then(response => response.json())
      .then(json => reaction(json))
}