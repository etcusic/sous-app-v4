class DailyMenu < ApplicationRecord
  belongs_to :weekly_menu
  has_many :meals
  has_many :recipes, through: :meals

  def send_info
    daily_menu = {
      id: self.id,
      date: self.date.strftime("%A, %b %d"),
      meals: self.get_meals
    }
  end

  def get_meals
    if self.meals.length > 0 
      self.meals  # adjust meal info in meal model
    else
      # blank meal method in meal model ??
      [{recipe_id: 0, recipe_name: "", quantity: 0, category: "--"}]
    end
  end

end
