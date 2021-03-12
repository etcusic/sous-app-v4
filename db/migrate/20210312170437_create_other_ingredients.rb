class CreateOtherIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :recipe_ingredients do |t|
      t.index :recipe_id
      t.index :ingredient_id
      t.float :quantity
    end

    create_table :pantry_ingredients do |t|
      t.index :pantry_id
      t.index :ingredient_id
      t.float :quantity
    end

    create_table :grocery_list_ingredients do |t|
      t.index :grocery_list_id
      t.index :ingredient_id
      t.float :quantity
    end
  end
end
