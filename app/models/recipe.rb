class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  alias_attribute :ingredients_join_info, :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients

  include IngredientProcessor

end
