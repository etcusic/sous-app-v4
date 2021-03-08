class RecipeIngredient < AbstractIngredient
  belongs_to :recipe
  belongs_to :ingredient
end
