class RecipesController < ApplicationController

    def index
        @recipes = User.first.recipes
        render json: @recipes
    end

    def show
        binding.pry
        # @recipe = Recipe.find_by_id()
    end

end
