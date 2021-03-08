class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.integer :servings
      t.text :instructions
      t.boolean :meal

      t.timestamps
    end
  end
end
