class RecipesController < ApplicationController

    def index
        # do I want to prepare recipes here???
        @recipes = User.find_by_id(recipe_params[:user_id]).recipes.map{|recipe| recipe.prepare_to_send}
        render json: @recipes
    end

    def show
        @recipe = Recipe.find_by_id(recipe_params[:id]).prepare_to_send
        render json: @recipe
    end

    def create
        # NEED TO ACCOUNT FOR EDGE CASES & ERRORS
        # @recipe = Recipe.create(recipe_params)
        # Ingredient.createRecipeIngredientsFromPantry(ingredient_params, @recipe.id)
        # redirect_to user_recipe_path(User.find_by_id(@recipe.user_id), @recipe)
    end

    private

    def recipe_params
        params.permit(:id, :user_id, :name, :servings, :instructions)
    end

    # this is here to handle nested attributes of ingredients when sent from frontend form
    # need better standardization
    def ingredient_params 
        info = params[:ingredients] .map do |ingredient| 
            {id: ingredient[:pantryIngredientId], quantity: ingredient[:quantity], unit: ingredient[:unit]}
        end
    end

end
