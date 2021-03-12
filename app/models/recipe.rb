class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients

  # THESE TWO METHODS NEED TO BE MOVED TO A MODULE
  def prepare_to_send
    x = self.attributes.merge!(ingredients: self.ingredients_with_quantities)
  end

  def ingredients_with_quantities
    joins = self.recipe_ingredients
    ingredients = self.ingredients.map.with_index{|ing, i| ing.attributes.merge!(quantity: joins[i].quantity) }
  end

end
