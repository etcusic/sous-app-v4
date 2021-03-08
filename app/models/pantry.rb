class Pantry < ApplicationRecord
  belongs_to :user
  has_many :pantry_ingredients
  alias_attribute :ingredients, :pantry_ingredients
end
