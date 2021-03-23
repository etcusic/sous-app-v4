class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        binding.pry
        # new_ingredients = ingredient_params.map do |obj|
        #     ingredient = Ingredient.create(obj[:ingredient])
        #     attrs = {ingredient_id: ingredient.id, pantry_id: obj[:pantry_ingredient][:pantry_id], quantity: obj[:pantry_ingredient][:quantity]}
        #     pantry_ingredient = PantryIngredient.create(attrs)
        # end
        # @pantry = Pantry.find_by_id(ingredient_params[0][:pantry_ingredient][:pantry_id])
        # render json: @pantry.ingredients_with_quantities
    end

    def update_with_pantry
        # logic should go in models
        ingredients = edit_ingredient_params.map do |ing|
            binding.pry
            pantry_ingredient = PantryIngredient.find_by(pantry_id: ing[:pantry_id], ingredient_id: ingredient.id)
            pantry_ingredient.update(quantity: ing[:quantity])
            ingredient = Ingredient.find_by_id(ing[:id])
            ingredient.update({
                name: ing[:name],
                unit: ing[:unit],
                cost_per_unit: ing[:cost_per_unit],
                category: ing[:category]
            })
        end
        binding.pry
    end

    private

    # currently for a single ingredient
    def new_ingredient_params
        params.require(:_json).map{|ing| ing.permit(:name, :unit, :cost_per_unit, :category, :quantity, :pantry_id)}
    end

    # split params up based on distribution of tables - simplify the create and edit logic
    def edit_ingredient_params
        params.require(:_json).map{|ing| ing.permit(:id, :name, :unit, :cost_per_unit, :category, :quantity, :pantry_id)}
    end

end
