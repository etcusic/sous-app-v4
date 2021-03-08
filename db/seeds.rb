# rails g resource User name:string

# rails g resource Pantry user:belongs_to 
# rails g resource GroceryList user:belongs_to
# rails g resource Recipe user:belongs_to name:string servings:integer instructions:text meal:boolean

# rails g resource Ingredient name:string unit:string cost_per_unit:float

# rails g resource PantryIngredient pantry:belongs_to ingredient:belongs_to quantity:float
# rails g resource GroceryListIngredient grocery_list:belongs_to ingredient:belongs_to quantity:float
# rails g resource RecipeIngredient recipe:belongs_to ingredient:belongs_to quantity:float

# add AbstractIngredient model for sub ingredients to inherit from