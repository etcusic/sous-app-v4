class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients
  alias_attribute :ingredients_join_info, :recipe_ingredients
  include IngredientProcessor
end
