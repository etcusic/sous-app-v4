class AddStartDateToWeeklyMenu < ActiveRecord::Migration[6.0]
  def change
    add_column :weekly_menus, :start_date, :date
  end
end
