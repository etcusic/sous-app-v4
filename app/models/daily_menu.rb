class DailyMenu < ApplicationRecord
  belongs_to :weekly_menu
  has_many :meals
  has_many :recipes, through: :meals

  def day
    self.date.strftime("%A, %b %d")
  end

end
