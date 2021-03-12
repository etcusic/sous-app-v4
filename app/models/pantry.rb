class Pantry < ApplicationRecord
  belongs_to :user
  has_many :pantry_ingredients, dependent: :destroy
  alias_attribute :ingredients_join_info, :pantry_ingredients
  has_many :ingredients, through: :pantry_ingredients

  include IngredientProcessor

end
