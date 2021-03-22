class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        @ingredient = Ingredient.create(ingredient_params)
        @pantry_ingredient = PantryIngredient.create(ingredient_id: @ingredient.id, pantry_id: pantry_info[:pantry_id], quantity: pantry_info[:quantity])
        binding.pry
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:name, :unit, :cost_per_unit, :category)
    end

    def pantry_info
        info = {pantry_id: params[:pantry_id], quantity: params[:quantity]}
    end

end
