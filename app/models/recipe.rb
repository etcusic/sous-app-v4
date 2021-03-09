class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients
  alias_attribute :ingredients, :recipe_ingredients

  def with_ingredients
    hash = {
      id: self.id,
      name: self.name,
      servings: self.servings,
      instructions: self.instructions,
      total_cost: self.total_cost,
      ingredients: self.ingredients
    }
  end

  def total_cost
    self.ingredients.map{ | ing | ing.quantity * ing. cost_per_unit } .reduce(&:+).round(2)
  end

end
