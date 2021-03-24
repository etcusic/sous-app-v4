class WeeklyMenu < ApplicationRecord
  belongs_to :user
  has_many :daily_menus
  has_many :meals, throgh: :daily_menus

  def sort_by_date
    # self.daily_menus.sort_by(:date)
  end

end
