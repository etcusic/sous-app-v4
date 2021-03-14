class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_ingredients, dependent: :destroy
  has_many :ingredients, through: :recipe_ingredients
  alias_attribute :ingredients_join_info, :recipe_ingredients
  include IngredientProcessor

  def self.create_with_nested_attrs(recipe, ings)
    # check validity of recipe and ings before creating new recipe
    @recipe = Recipe.new(recipe)
    if @recipe.save
      ings.map do | ing |
        ing[:recipe_id] = @recipe.id
        RecipeIngredient.create(ing)
      end
    else
      "Throw all the errors"
    end
    @recipe
  end

end
