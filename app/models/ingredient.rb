class Ingredient < ApplicationRecord
    has_many :recipes, through: :recipe_ingredients
    has_many :pantries, through: :pantry_ingredients
    has_many :grocery_lists, through: :grocery_list_ingredients
end
