class GroceryListIngredient < AbstractIngredient
  belongs_to :grocery_list
  belongs_to :ingredient
end
