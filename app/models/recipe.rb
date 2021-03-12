class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  alias_attribute :ingredients, :recipe_ingredients

  # how about ingredient arrays ???
  # [{name: "name", unit: "unit", cost_per_unit: x}, {quantity: x}]

  ### -- OR -- ###

  # def ingredients
  #   self.join_tables do |table|
  #   ing = table.ingredient
  #   hash = {
  #     id: ing.id,
  #     name: ing.name,
  #     unit: ing.unit,
  #     cost_per_unit: ing.cost_per_unit,
  #     quantity: table.quantity
  #   }
  # end

  # let's put this in the IngredientJoinTable

  def with_ingredients
    hash = {
      id: self.id,
      name: self.name,
      servings: self.servings,
      instructions: self.instructions,
      total_cost: self.total_cost,
      ingredients: self.ingredients, # if I separate out quantity then I will need another method to handle this
      in_pantry: self.enough_ingredients_in_pantry?
    }
  end

  def total_cost
    x = self.ingredients.map{ | ing | ing.quantity * ing. cost_per_unit } .reduce(&:+).round(2)
  end

  def enough_ingredients_in_pantry?
    pantry = self.user.pantry
    self.ingredients.all?{|ing| ing.quantity <= pantry.ingredients.find_by(name: ing.name).quantity}
  end

end
