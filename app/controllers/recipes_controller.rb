class RecipesController < ApplicationController

    def index
        @recipes = User.first.recipes
        render json: @recipes
    end

    def show
        @recipe = Recipe.find_by_id(params[:id])
        render json: @recipe.with_ingredients
    end

    def create
        binding.pry
    end

    private

    def recipe_params
        params.permit(:user_id, :name, :servings, :instructions, :ingredients, :quantity, :unit)
    end

    def ingredient_params
        params[:ingredients] .map{params.permit(:name, :quantity, :unit)}
    end

end
