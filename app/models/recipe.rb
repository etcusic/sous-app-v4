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
      ingredients: self.ingredients
    }
  end

end
