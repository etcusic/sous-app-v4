# rails g resource User name:string

# rails g resource Pantry user:belongs_to 
# rails g resource GroceryList user:belongs_to
# rails g resource Recipe user:belongs_to name:string servings:integer instructions:text meal:boolean

# rails g resource Ingredient name:string unit:string cost_per_unit:float

# rails g resource PantryIngredient pantry:belongs_to ingredient:belongs_to quantity:float
# rails g resource GroceryListIngredient grocery_list:belongs_to ingredient:belongs_to quantity:float
# rails g resource RecipeIngredient recipe:belongs_to ingredient:belongs_to quantity:float

# add AbstractIngredient model for sub ingredients to inherit from

User.create(name: "Mr Bojangles")
Pantry.create(user_id: 1)

# ALL OF THESE PRICES NEED TO BE REASSESSED
FOOD = [
    {name: 'brown rice', cost_per_unit: 0.06, unit: 'oz'},
    {name: 'quinoa', cost_per_unit: 0.15, unit: 'oz'},
    {name: 'bread', cost_per_unit: 0.13, unit: 'pcs'},
    {name: 'corn tortilla', cost_per_unit: 0.08, unit: 'pcs'},
    {name: 'ground turkey', cost_per_unit: 0.19, unit: 'oz'},
    {name: 'chicken', cost_per_unit: 0.13, unit: 'oz'},
    {name: 'feta', cost_per_unit: 0.3, unit: 'oz'},
    {name: 'egg', cost_per_unit: 0.27, unit: 'pcs'},
    {name: 'corn', cost_per_unit: 0.09, unit: 'oz'},
    {name: 'lime', cost_per_unit: 0.5, unit: 'pcs'},
    {name: 'zucchini', cost_per_unit: 0.09, unit: 'oz'},
    {name: 'jalapeno pepper', cost_per_unit: 0.07, unit: 'oz'},
    {name: 'shredded carrot', cost_per_unit: 0.18, unit: 'oz'},
    {name: 'mushroom', cost_per_unit: 0.18, unit: 'oz'},
    {name: 'yellow bell pepper', cost_per_unit: 0.9, unit: 'oz'},
    {name: 'green bell pepper', cost_per_unit: 0.7, unit: 'pcs'},
    {name: 'red bell pepper', cost_per_unit: 0.9, unit: 'oz'},
    {name: 'yellow onion', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'red onion', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'garlic', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'green onion', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'cilantro', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'cabbage', cost_per_unit: 0.04, unit: 'oz'},
    {name: 'canned tomato', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'cashew', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'sliced turkey', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'sliced cheddar', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'pasta', cost_per_unit: 0.1, unit: 'oz'},
    {name: 'spinach', cost_per_unit: 0.1, unit: 'oz'}
]

FOOD.each do |item| 
    Ingredient.create(item)
end

Ingredient.all.each do |ing|
    PantryIngredient.build(pantry_id: 1, ingredient_id: ing.id, quantity: rand(2..80))
end


Recipe.create(user_id: 1, name: "Garlic Chicken", portions: 4, instructions: "Cook rice, cut veggies, sautee all the things")
Recipe.create(user_id: 1, name: "Cashew Chicken", portions: 4, instructions: "Cook rice, cut veggies, do a voodoo chant, sautee and add sauce")
Recipe.create(user_id: 1, name: "Mushroom Chicken", portions: 4, instructions: "Cook all the things")
Recipe.create(user_id: 1, name: "Turkey Spaghetti", portions: 4, instructions: "Boil pasta, cook the things, add sauce, injest carbies")
Recipe.create(user_id: 1, name: "Turkey Tacos", portions: 4, instructions: "Butter dem tortillas, cook meat, sprinkle lime juice, eat and be happy")
Recipe.create(user_id: 1, name: "Chicken Salad", portions: 4, instructions: "Veggies in bowl, chicken on top")

def add_ingredients(recipe_id, supply_ids)
    supply_ids.map{| id | RecipeIngredient.create(recipe_id: recipe_id, ingredient_id: id, quantity: rand(1..20))}
end

add_ingredients(1, [1, 6, 20, 16, 14, 13])
add_ingredients(2, [1, 6, 25, 21, 13, 14])
add_ingredients(3, [1, 6, 14, 11, 19])
add_ingredients(4, [28, 5, 24, 14, 18])
add_ingredients(5, [5, 4, 12, 18, 10])
add_ingredients(6, [6, 29, 7, 13, 19, 21])