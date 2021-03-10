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
        hash = recipe_params
        hash[:ingredients] = ingredient_params
        # @recipe = Recipe.create(recipe_params)
        binding.pry
    end

    private

    def recipe_params
        params.permit(:user_id, :name, :servings, :instructions)
    end

    def ingredient_params 
        params[:ingredients] .map{|x| {name: x[:name], quantity: x[:quantity], unit: x[:unit]}}
    end

end
