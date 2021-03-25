export const sendRecipeData = (event, method, recipe, userId, reaction) => {
    event.preventDefault()
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

export const sendWeeklyMenu = (event, userId, weeklyMenuId, payload, reaction) => {
    event.preventDefault()
    console.log(payload)
    const route = `http://localhost:3001/users/${userId}/weekly_menus/${weeklyMenuId}`
    const configObject = {
        method: 'PATCH',
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

export const fetchWeeklyMenu = (userId, weeklyMenuId, reaction) => {
    fetch(`http://localhost:3001/users/${userId}/weekly_menus/${weeklyMenuId}`)
    .then(response => response.json())
    .then(json => reaction(json))
}   