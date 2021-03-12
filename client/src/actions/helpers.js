export const calculateRawCost = (ingredients) => {
    return ingredients.map(x => x.quantity * x.cost_per_unit).reduce((y,z) => y += z)
}

export const costPerServing = (recipe) => {
    return calculateRawCost(recipe.ingredients) / recipe.servings
}

// functional but needs to be consolidated - couldn't get ternary to work
export const enoughInPantry = (recipeIngredients, pantryIngredients) => {
    let x = recipeIngredients.map(recipeIng => {
        let pantryIng = pantryIngredients.find(pantryIng => pantryIng.id === recipeIng.id) 
        if (pantryIng.quantity < recipeIng.quantity) {
            return false
        } else {
            return true
        }
    })
    if (x.every(y => y)) {
        return "There are enough ingredients in the pantry for this recipe!"
     } else {
        return "Not enough ingredients in the pantry for this recipe :("
     } 
}