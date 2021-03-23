class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        new_ingredients = ingredient_params.map do |obj|
            ingredient = Ingredient.create(obj[:ingredient])
            attrs = {ingredient_id: ingredient.id, pantry_id: obj[:pantry_ingredient][:pantry_id], quantity: obj[:pantry_ingredient][:quantity]}
            pantry_ingredient = PantryIngredient.create(attrs)
        end
        @pantry = Pantry.find_by_id(ingredient_params[0][:pantry_ingredient][:pantry_id])
        render json: @pantry.ingredients_with_quantities
    end

    def create
        binding.pry
    end

    def update
        binding.pry
    end

    private

    # currently for a single ingredient
    def ingredient_params
        
    end

end
