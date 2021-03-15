export const createRecipe = (event, recipe, userId) => {
    event.preventDefault()
    console.log(event)
    console.log(recipe)
    console.log(userId)
    // const configObject = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": 'application/json',
    //         "Accept": 'application/json'
    //     },
    //     body: JSON.stringify(recipe)
    // }

    // fetch(`http://localhost:3001/users/${userId}/recipes`, configObject)
    //   .then(response => response.json())
    //   .then(json => this.props.showRecipe(json.id))
          // add catch
}

export const updateRecipe = (event, recipe, userId) => {
    event.preventDefault()
    console.log(event)
    console.log(recipe)
    console.log(userId)
    // const configObject = {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": 'application/json',
    //         "Accept": 'application/json'
    //     },
    //     body: JSON.stringify(recipe)
    // }

    // fetch(`http://localhost:3001/users/${userId}/recipes`, configObject)
    //   .then(response => response.json())
    //   .then(json => this.props.showRecipe(json.id))
          // add catch
}