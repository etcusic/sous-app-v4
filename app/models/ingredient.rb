class Ingredient < ApplicationRecord
    has_many :pantry_ingredients
    has_many :grocery_list_ingredients
    has_many :recipes
end
