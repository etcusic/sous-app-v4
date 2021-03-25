class AddEndDateToWeeklyMenus < ActiveRecord::Migration[6.0]
  def change
    add_column :weekly_menus, :end_date, :date
  end
end
