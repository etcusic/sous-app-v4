class GroceryList < ApplicationRecord
  belongs_to :user
  has_many :grocery_list_ingredients, dependent: :destroy
  alias_attribute :ingredients, :grocery_list_ingredients
end
