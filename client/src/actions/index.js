export const createRecipe = (event, recipe, userId, reaction) => {
    event.preventDefault()
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(recipe)
    }

    fetch(`http://localhost:3001/users/${userId}/recipes`, configObject)
      .then(response => response.json())
      .then(json => reaction(json.id))
          // add catch
}

// CONSOLIDATE INTO ONE FUNCTION BY MAKING METHOD A PARAMETER AS WELL

export const updateRecipe = (event, recipe, userId, reaction) => {
    event.preventDefault()
    const configObject = {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(recipe)
    }

    fetch(`http://localhost:3001/users/${userId}/recipes/${recipe.id}`, configObject)
      .then(response => response.json())
      .then(json => reaction(json.id))
          // add catch
}

export const sendRecipeData = (event, method, recipe, userId, reaction) => {
    event.preventDefault()
    let id = recipe.id ? `/${recipe.id}` : ""
    const route = `http://localhost:3001/users/${userId}/recipes` + id
    console.log(`method: ${method}, userId: ${userId}, route: ${route}`)
    console.log(recipe)

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