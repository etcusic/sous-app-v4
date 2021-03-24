class Meal < ApplicationRecord
  belongs_to :daily_menu
  belongs_to :recipe
end
