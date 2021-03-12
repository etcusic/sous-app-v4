class IngredientReferences < ActiveRecord::Migration[6.0]
  def change
    add_foreign_key :recipe_ingredients, :recipes, foreign_key: true
    add_foreign_key :pantry_ingredients, :pantries, foreign_key: true
    add_foreign_key :grocery_list_ingredients, :grocery_lists, foreign_key: true
  end
end
