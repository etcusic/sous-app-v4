class Meal < ApplicationRecord
  belongs_to :daily_menu
  belongs_to :recipe

  def send_info
    { recipe_id: self.recipe_id, quantity: self.quantity, category: self.category }
  end

end
