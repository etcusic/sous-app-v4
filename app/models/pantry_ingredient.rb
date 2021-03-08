class PantryIngredient < AbstractIngredient
  belongs_to :pantry
  belongs_to :ingredient
end
