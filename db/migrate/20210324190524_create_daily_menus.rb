class CreateDailyMenus < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_menus do |t|
      t.belongs_to :weekly_menu, null: false, foreign_key: true
      t.date :date

      t.timestamps
    end
  end
end
