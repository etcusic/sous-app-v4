# rails g resource User name:string

# rails g resource Pantry user:belongs_to 
# rails g resource GroceryList user:belongs_to
# rails g resource Recipe user:belongs_to name:string servings:integer instructions:text meal:boolean

# rails g resource Ingredient name:string unit:string cost_per_unit:float
# rails g model PantryIngredient pantry:belongs_to ingredient:belongs_to quantity:float
# rails g model GroceryListIngredient grocery_list:belongs_to ingredient:belongs_to quantity:float
# rails g model RecipeIngredient recipe:belongs_to ingredient:belongs_to quantity:float

# add IngredientJoinTable model for sub ingredients to inherit from

# rails g resource WeeklyMenu user:belongs_to 
# has_many :daily_menus || has_many :meals, through: :daily_menus
# rails g model DailyMenu weekly_menu:belongs_to date:date => instance method "day" with strftime
# has_many :meals || has_many :recipes, through: :meals
# rails g model Meal daily_menu:belongs_to recipe:belongs_to quantity:integer


User.create(name: "Mr Bojangles")
Pantry.create(user_id: 1)

PRODUCE = [
    {name: 'yellow bell pepper', cost_per_unit: 0.9, unit: 'oz', category: 'produce'},
    {name: 'green bell pepper', cost_per_unit: 0.7, unit: 'pcs', category: 'produce'},
    {name: 'red bell pepper', cost_per_unit: 0.9, unit: 'oz', category: 'produce'},
    {name: 'jalapeno pepper', cost_per_unit: 0.07, unit: 'oz', category: 'produce'},
    {name: 'pobalano pepper', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'yellow onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'white onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'red onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'green onion', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'garlic', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'zucchini', cost_per_unit: 0.09, unit: 'oz', category: 'produce'},
    {name: 'yellow squash', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'mushroom', cost_per_unit: 0.18, unit: 'oz', category: 'produce'},
    {name: 'shredded carrot', cost_per_unit: 0.18, unit: 'oz', category: 'produce'},
    {name: 'baby carrots', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'bulk carrots', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'celery', cost_per_unit: 0.1, unit: 'oz', category: 'produce'}, 
    {name: 'cabbage', cost_per_unit: 0.04, unit: 'oz', category: 'produce'},
    {name: 'spinach', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'romaine lettuce', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'iceberg lettuce', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'kale', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'parsley', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'mint', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'rosemary', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'cilantro', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'basil', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'red potatoes', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'mini potatoes', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'sweet potatoes', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'corn', cost_per_unit: 0.09, unit: 'oz', category: 'produce'},
    {name: 'lime', cost_per_unit: 0.5, unit: 'pcs', category: 'produce'},
    {name: 'lemmon', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'fresh ginger', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'tube ginger', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'tube lemongrass', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
    {name: 'tube mixed herb', cost_per_unit: 0.1, unit: 'oz', category: 'produce'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'produce'},
]

PROTEINS = [
    {name: 'egg', cost_per_unit: 0.27, unit: 'pcs', category: 'proteins'},
    {name: 'sliced turkey', cost_per_unit: 0.1, unit: 'oz', category: 'proteins'},
    {name: 'ground turkey', cost_per_unit: 0.19, unit: 'oz', category: 'proteins'},
    {name: 'chicken breast', cost_per_unit: 0.13, unit: 'oz', category: 'proteins'},
    {name: 'grilled chicken', cost_per_unit: 0.13, unit: 'oz', category: 'proteins'},
    {name: 'whole chicken', cost_per_unit: 0.13, unit: 'oz', category: 'proteins'},
    {name: 'shrimp', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'pork loin', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'pork chops', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'},
    {name: 'salmon', cost_per_unit: 0.27, unit: 'oz', category: 'proteins'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'proteins'},
]

DAIRY = [
    {name: 'butter', cost_per_unit: 0.1, unit: 'oz', category: 'dairy'},
    {name: 'feta', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'sliced cheddar', cost_per_unit: 0.1, unit: 'oz', category: 'dairy'},
    {name: 'fresh parmesan', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'can parmesan', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'shredded monterrey', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},   
    {name: 'milk', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'heavy cream', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'},
    {name: 'sour cream', cost_per_unit: 0.3, unit: 'oz', category: 'dairy'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'dairy'},
]

DRIED_GOODS = [
    {name: 'canned tomato', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'canned pineapple', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'coconut milk', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'cashew', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'pasta', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'brown rice', cost_per_unit: 0.06, unit: 'oz', category: 'dried goods'},
    {name: 'jasmine rice', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'basmati rice', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'wild rice', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'quinoa', cost_per_unit: 0.15, unit: 'oz', category: 'dried goods'},
    {name: 'bread', cost_per_unit: 0.13, unit: 'pcs', category: 'dried goods'},
    {name: 'corn tortilla', cost_per_unit: 0.08, unit: 'pcs', category: 'dried goods'},
    {name: 'flour tortilla', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'olive oil', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'vegetable oil', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'sesame oil', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'beef base', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'chicken base', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'flour', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'panko', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'seaweed', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'sugar', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
    {name: 'brown sugar', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'dried goods'},
]

FROZEN_GOODS = [
    {name: 'frozen corn', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen broccoli', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen veg medley', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen peas', cost_per_unit: 0.09, unit: 'oz', category: 'frozen goods'},
    {name: 'frozen pizza', cost_per_unit: 0.09, unit: 'pcs', category: 'frozen goods'},
    {name: 'frozen samosas', cost_per_unit: 0.1, unit: 'oz', category: 'frozen goods'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'frozen goods'},
]

CONDIMENTS = [
    {name: 'soy sauce', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'oyster sauce', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'sambal', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'tomato sauce', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'paste', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'sriracha', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'pesto', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'sundried tomato paste', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'yellow mustard', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'whole grain mustard', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'brown mustard', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'tamarind paste', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'worcestershire sauce', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'ketchup', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'balsamic vinagrette', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
    {name: 'hummus', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'condiments'},
]


SPICES = [
    {name: 'kosher salt', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'sea salt', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'ground pepper', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'cracked pepper', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'paprika', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'allspice', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'cajun seasoning', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'cayenne', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'dried oregano', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'dried basil', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'garam masala', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'red pepper flakes', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'garlic powder', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'onion powder', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'curry powder', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'chili powder', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'cumin', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
    {name: 'coriander', cost_per_unit: 0.1, unit: 'oz', category: 'spices'}
    # {name: '', cost_per_unit: 0.1, unit: 'oz', category: 'spices'},
]

FOOD = [PRODUCE, PROTEINS, DAIRY, DRIED_GOODS, FROZEN_GOODS, CONDIMENTS, SPICES].flatten!

FOOD.each do |item| 
    ing = Ingredient.create(item)
    PantryIngredient.create({pantry_id: 1, ingredient_id: ing.id, quantity: rand(2..80)})
end

Recipe.create(user_id: 1, name: "Grilled Chicken & Veg", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Grilled Salmon & Veg", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Turkey Tacos", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Southwest Chili", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Turkey Bolognese", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Whole Roast Chicken", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Pho Ga with Cabbage Noodles", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Phad Thai wiht Cabbage Noodles", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Bibimbap", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Cashew Chicken", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Garlic Ginger Turkey", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Unstuffed Peppers", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Frozen Pizza", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Chicken Salad", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Sandwich", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Turkey & Hummus Wraps", servings: 1, instructions: "")
Recipe.create(user_id: 1, name: "Egg & Tortilla Rollups", servings: 1, instructions: "")

# binding.pry
# Recipes:
# - Grilled chicken/salmon and veg
# - Turkey Tacos
# - Southwest Chili
# - Turkey Bolognese
# - Cabbage Pho Ga
# - Cabbage Phad Thai
# - Bibimbap - turkey or salmon
# - Cashew Chicken
# - Garlic Ginger Turkey
# - Unstuffed Peppers
# - Frozen Pizza
# - Chicken Salad
# - Sandwich
# - Turkey and Hummus wraps
# - Egg & Tortilla wraps
# - 



# def add_ingredients(recipe_id, ingredient_ids)
#     ingredient_ids.map{|ing_id| RecipeIngredient.create({recipe_id: recipe_id, ingredient_id: ing_id, quantity: rand(1..20)})}
# end

# add_ingredients(1, [1, 6, 20, 16, 14, 13])
# add_ingredients(2, [1, 6, 25, 21, 13, 14])
# add_ingredients(3, [1, 6, 14, 11, 19])
# add_ingredients(4, [28, 5, 24, 14, 18])
# add_ingredients(5, [5, 4, 12, 18, 10])
# add_ingredients(6, [6, 29, 7, 13, 19, 21])
