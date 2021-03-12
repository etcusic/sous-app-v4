class IngredientQuantityJoin < ApplicationRecord
    has_many :ingredients
    self.abstract_class = true
end