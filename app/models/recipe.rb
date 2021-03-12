class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  def prepare_to_send
    x = self.attributes.merge!(ingredients: self.ingredients_with_quantities)
  end

  def ingredients_with_quantities
    joins = self.recipe_ingredients
    ingredients = self.ingredients.map.with_index{|ing, i| ing.attributes.merge!(quantity: joins[i].quantity) }
  end

  # these need to be moved to frontend
  def total_cost
    # x = self.ingredients.map{ | ing | ing.quantity * ing. cost_per_unit } .reduce(&:+).round(2)
  end

  def enough_ingredients_in_pantry?
    # pantry = self.user.pantry
    # self.ingredients.all?{|ing| ing.quantity <= pantry.ingredients.find_by(name: ing.name).quantity}
  end

end
