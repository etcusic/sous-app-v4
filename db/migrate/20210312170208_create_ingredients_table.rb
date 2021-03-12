class CreateIngredientsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :unit
      t.float :cost_per_unit
    end
  end
end
