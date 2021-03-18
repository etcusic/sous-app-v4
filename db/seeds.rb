# rails g resource User name:string

# rails g resource Pantry user:belongs_to 
# rails g resource GroceryList user:belongs_to
# rails g resource Recipe user:belongs_to name:string servings:integer instructions:text meal:boolean

# rails g resource Ingredient name:string unit:string cost_per_unit:float
# rails g model PantryIngredient pantry:belongs_to ingredient:belongs_to quantity:float
# rails g model GroceryListIngredient grocery_list:belongs_to ingredient:belongs_to quantity:float
# rails g model RecipeIngredient recipe:belongs_to ingredient:belongs_to quantity:float

# add IngredientJoinTable model for sub ingredients to inherit from

User.create(name: "Mr Bojangles")
Pantry.create(user_id: 1)

PRODUCE = [
    {name: 'corn', cost_per_unit: 0.09, unit: 'oz', category: 'produce'},
    {name: 'lime', cost_per_unit: 0.5, unit: 'pcs', category: 'produce'},
    {name: 'zucchini', cost_per_unit: 0.09, unit: 'oz', category: 'produce'},
    {name: 'jalapeno pepper', cost_per_unit: 0.07, unit: 'oz', category: 'produce'},
    {name: 'shredded carrot', cost_per_unit: 0.18, unit: 'oz', category: 'produce'},
    {name: 'mushroom', cost_per_unit: 0.18, unit: 'oz', category: 'produce'},
    {name: 'yellow bell pepper', cost_per_unit: 0.9, unit: 'oz', category: 'produce'},
    {name: 'green bell pepper', cost_per_unit: 0.7, unit: 'pcs', category: 'produce'},
    {name: 'red bell pepper', cost_per_unit: 0.9, unit: 'oz', category: 'produce'},
    {name: 'yellow onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'red onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'garlic', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'green onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'cilantro', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'cabbage', cost_per_unit: 0.04, unit: 'oz', category: 'produce'},
    {name: 'spinach', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
]

PROTEINS = [
    {name: 'egg', cost_per_unit: 0.27, unit: 'pcs', category: 'proteins'},
    {name: 'sliced turkey', cost_per_unit: 0.1, unit: 'oz', category: 'proteins'},
    {name: 'ground turkey', cost_per_unit: 0.19, unit: 'oz', category: 'proteins'},
    {name: 'chicken breast', cost_per_unit: 0.13, unit: 'oz', category: 'proteins'},
    {name: 'whole chicken', cost_per_unit: 0.13, unit: 'oz', category: 'proteins'},
    {name: 'shrimp', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'pork loin', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'pork chops', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'salmon', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
]

DAIRY = [
    {name: 'feta', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'sliced cheddar', cost_per_unit: 0.1, unit: 'oz', category: 'dairy'},
    {name: 'fresh parmesan', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'can parmesan', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'shredded monterrey', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},   
    {name: 'milk', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'heavy cream', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'sour cream', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
]

DRIED_GOODS = [
    {name: 'canned tomato', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'cashew', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'pasta', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'brown rice', cost_per_unit: 0.06, unit: 'oz', category: 'dried goods'},
    {name: 'quinoa', cost_per_unit: 0.15, unit: 'oz', category: 'dried goods'},
    {name: 'bread', cost_per_unit: 0.13, unit: 'pcs', category: 'dried goods'},
    {name: 'corn tortilla', cost_per_unit: 0.08, unit: 'pcs', category: 'dried goods'},
]

FROZEN_GOODS = [
    {name: 'frozen corn', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen broccoli', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen veg medley', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen peas', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen pizza', cost_per_unit: 0.09, unit: 'pcs', category: 'frozen goods'},
]

# SPICES = []
# CONDIMENTS = []

FOOD = [PRODUCE, PROTEINS, DAIRY, DRIED_GOODS, FROZEN_GOODS].flatten!

FOOD.each do |item| 
    ing = Ingredient.create(item)
    PantryIngredient.create({pantry_id: 1, ingredient_id: ing.id, quantity: rand(2..80)})
end

Recipe.create(user_id: 1, name: "Garlic Chicken", servings: rand(2..8), instructions: "Cook rice, cut veggies, sautee all the things")
Recipe.create(user_id: 1, name: "Cashew Chicken", servings: rand(2..8), instructions: "Cook rice, cut veggies, do a voodoo chant, sautee and add sauce")
Recipe.create(user_id: 1, name: "Mushroom Chicken", servings: rand(2..8), instructions: "Cook all the things")
Recipe.create(user_id: 1, name: "Turkey Spaghetti", servings: rand(2..8), instructions: "Boil pasta, cook the things, add sauce, injest carbies")
Recipe.create(user_id: 1, name: "Turkey Tacos", servings: rand(2..8), instructions: "Butter dem tortillas, cook meat, sprinkle lime juice, eat and be happy")
Recipe.create(user_id: 1, name: "Chicken Salad", servings: rand(2..8), instructions: "Veggies in bowl, chicken on top")

def add_ingredients(recipe_id, ingredient_ids)
    ingredient_ids.map{|ing_id| RecipeIngredient.create({recipe_id: recipe_id, ingredient_id: ing_id, quantity: rand(1..20)})}
end

add_ingredients(1, [1, 6, 20, 16, 14, 13])
add_ingredients(2, [1, 6, 25, 21, 13, 14])
add_ingredients(3, [1, 6, 14, 11, 19])
add_ingredients(4, [28, 5, 24, 14, 18])
add_ingredients(5, [5, 4, 12, 18, 10])
add_ingredients(6, [6, 29, 7, 13, 19, 21])

# binding.pry