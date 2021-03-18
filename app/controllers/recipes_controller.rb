class RecipesController < ApplicationController

    def index
        # binding.pry
        @recipes = User.find_by_id(recipe_params[:user_id]).recipes
        render json: @recipes
    end

    def show
        @recipe = Recipe.find_by_id(recipe_params[:id]).prepare_to_send
        render json: @recipe
    end

    def create
        # NEED TO ACCOUNT FOR EDGE CASES & ERRORS
        @recipe = Recipe.create_with_nested_attrs(recipe_params, ingredient_params)
        render json: @recipe.prepare_to_send
    end

    def update
        # REVISIT THIS
        @recipe = Recipe.update_with_ingredients(recipe_params, update_ingredient_params)
        render json: @recipe.prepare_to_send
    end

    private

    def recipe_params
        params.permit(:id, :user_id, :name, :servings, :instructions)
    end

    # this is here to handle nested attributes of ingredients when sent from frontend form - had trouble allowing nested attrs to be accessible
    # need to merge 2 ingredient params
    def ingredient_params 
        info = params[:ingredients] .map do |ingredient| 
            {ingredient_id: ingredient[:id], quantity: ingredient[:quantity]}
        end
    end

    def update_ingredient_params
        info = params[:ingredients] .map do |ingredient| 
            {recipe_id: recipe_params[:id], ingredient_id: ingredient[:id], quantity: ingredient[:quantity]}
        end
    end

end
