class CreateWeeklyMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :weekly_menus do |t|
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
