class DropIngredientTables < ActiveRecord::Migration[6.0]
  def change
    drop_table :pantry_ingredients
    drop_table :recipe_ingredients
    drop_table :grocery_list_ingredients
  end
end
