class AddColumnsToIngredients < ActiveRecord::Migration[6.0]
  def change
    add_column :pantry_ingredients, :name, :string
    add_column :pantry_ingredients, :unit, :string
    add_column :pantry_ingredients, :cost_per_unit, :float

    add_column :grocery_list_ingredients, :name, :string
    add_column :grocery_list_ingredients, :unit, :string
    add_column :grocery_list_ingredients, :cost_per_unit, :float

    add_column :recipe_ingredients, :name, :string
    add_column :recipe_ingredients, :unit, :string
    add_column :recipe_ingredients, :cost_per_unit, :float

    remove_column :pantry_ingredients, :ingredient_id
    remove_column :grocery_list_ingredients, :ingredient_id
    remove_column :recipe_ingredients, :ingredient_id
  end
end
