class GroceryList < ApplicationRecord
  belongs_to :user
  has_many :grocery_list_ingredients, dependent: :destroy
  alias_attribute :ingredients_join_info, :grocery_list_ingredients
  has_many :ingredients, through: :grocery_list_ingredients

  include IngredientProcessor

end
