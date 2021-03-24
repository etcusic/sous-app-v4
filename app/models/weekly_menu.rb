class WeeklyMenu < ApplicationRecord
  belongs_to :user
  has_many :daily_menus
  has_many :meals, throgh: :daily_menus
end
