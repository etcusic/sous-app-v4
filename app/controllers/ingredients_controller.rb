class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        @ingredient = Ingredient.create(ingredient_params)
        @pantry_ingredient = @ingredient.build(pantry_info).save
        binding.pry
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:name, :unit, :cost_per_unit, :category)
    end

    def pantry_info
        params.require(:ingredient.permit(:pantry_id, :quantity))
    end

end
