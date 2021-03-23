class IngredientsController < ApplicationController

    def create_with_pantry
        # check for valid inputs
        @pantry = Pantry.find_by_id(params[:pantry_id])
        new_ingredients = new_ingredient_params.map do |obj|
            ingredient = Ingredient.create({
                name: obj["name"],
                unit: obj["unit"],
                cost_per_unit: obj["cost_per_unit"],
                category: obj["category"]
            })
            attrs = {ingredient_id: ingredient.id, pantry_id: @pantry.id, quantity: obj[:quantity]}
            pantry_ingredient = PantryIngredient.create(attrs)
        end
        render json: @pantry.ingredients_with_quantities
    end

    def update_with_pantry
        # logic should go in models
        @pantry = Pantry.find_by_id(params[:pantry_id])
        ingredients = edit_ingredient_params.map do |ing|
            ingredient = Ingredient.find_by_id(ing[:id])
            pantry_ingredient = PantryIngredient.find_by(pantry_id: @pantry.id, ingredient_id: ingredient.id)
            pantry_ingredient.update(quantity: ing[:quantity])
            ingredient.update({
                name: ing[:name],
                unit: ing[:unit],
                cost_per_unit: ing[:cost_per_unit],
                category: ing[:category]
            })
            ingredient
        end
        render json: @pantry.ingredients_with_quantities
    end

    private

    # currently for a single ingredient
    def new_ingredient_params
        params.require(:_json).map{|ing| ing.permit(:name, :unit, :cost_per_unit, :category, :quantity)}
    end

    # split params up based on distribution of tables - simplify the create and edit logic
    def edit_ingredient_params
        params.require(:_json).map{|ing| ing.permit(:id, :name, :unit, :cost_per_unit, :category, :quantity)}
    end

end
