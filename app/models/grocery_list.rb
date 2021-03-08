class GroceryList < ApplicationRecord
  belongs_to :user
  has_many :grocery_list_ingredients
  alias_attribute :ingredients, :grocery_list_ingredients
end
