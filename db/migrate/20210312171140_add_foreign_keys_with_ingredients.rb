class AddForeignKeysWithIngredients < ActiveRecord::Migration[6.0]
  def change
    drop_table :recipe_ingredients
    drop_table :pantry_ingredients
    drop_table :grocery_list_ingredients

    create_table :recipe_ingredients do |t|
      t.integer :recipe_id, foreign_key: true
      t.integer :ingredient_id, foreign_key: true
      t.float :quantity
    end

    create_table :pantry_ingredients do |t|
      t.integer :pantry_id, foreign_key: true
      t.integer :ingredient_id, foreign_key: true
      t.float :quantity
    end

    create_table :grocery_list_ingredients do |t|
      t.integer :grocery_list_id, foreign_key: true
      t.integer :ingredient_id, foreign_key: true
      t.float :quantity
    end
  end
end
