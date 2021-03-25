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
      self.meals.map{|meal| meal.send_info}  # adjust meal info in meal model
    else
      # blank meal method in meal model ??
      [{recipe_id: 0, quantity: 0, category: "--"}]
    end
  end

  # NEEDS TO BE ABLE TO ACCOUNT FOR MULTIPLE MEALS
  def self.create_and_update_meals(daily_menus_array)
    daily_menus_array.map do |menu| 
      @daily = DailyMenu.find_by_id(menu[:id])
      menu[:meals].map do |meal|
          if @daily.meals.length < 1
              new_meal = @daily.meals.build(meal).save
          else
              update_meal = @daily.meals[0].update(meal)
          end
      end
      @daily.send_info
    end
  end

end
