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

end
