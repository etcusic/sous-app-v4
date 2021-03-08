class CreatePantryIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :pantry_ingredients do |t|
      t.belongs_to :pantry, null: false, foreign_key: true
      t.belongs_to :ingredient, null: false, foreign_key: true
      t.float :quantity

      t.timestamps
    end
  end
end
