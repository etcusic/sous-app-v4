class AddCategoryToMeals < ActiveRecord::Migration[6.0]
  def change
    add_column :meals, :category, :string
  end
end
