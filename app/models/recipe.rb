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
      binding.pry
      "Throw all the errors"
    end
    @recipe
  end

  def self.update_with_ingredients(recipe, ings)
    @recipe = Recipe.find_by_id(recipe[:id])
    @recipe.update(recipe)
    if ings.include?{ | ing | ing[:id] == 0 || ing[:id] == "0" }
      # need an error handler
      binding.pry
    else
      ingredients = ings.map do |ing| 
        x = RecipeIngredient.find_by(ingredient_id: ing[:ingredient_id], recipe_id: @recipe.id)
        if x 
          x.update(ing)
          x
        else
          new_ing = RecipeIngredient.create(ing)
        end
      end
    end
    
    binding.pry
    @recipe
  end
  
end
