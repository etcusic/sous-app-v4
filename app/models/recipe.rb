class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients
  alias_attribute :ingredients, :recipe_ingredients
end
