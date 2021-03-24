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

export const sendNewIngredient = (event, method, ingredients, pantryId, reaction) => {
    // check for valid inputs - name, category, unit, cost_per_unit
    event.preventDefault()
    console.log(ingredients)
    // work on different routes for creating and updating
    const route = `http://localhost:3001/pantries/${pantryId}/new_ingredient`
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

export const sendWeeklyMenu = (event, userId, method, payload, reaction) => {
    event.preventDefault()
    console.log(`userId => ${userId}`)
    console.log(`method => ${method}`)
    console.log(`payload => ${JSON.stringify(payload)}`)
    console.log(`reaction => ${reaction}`)
    const route = `http://localhost:3001/users/${userId}/weekly_menus`
    const configObject = {
        method: method,
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(payload)
    }

    fetch(route, configObject)
      .then(response => response.json())
      .then(json => reaction(json))
}