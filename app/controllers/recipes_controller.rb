class RecipesController < ApplicationController

    def index
        @recipes = User.find_by_id(recipe_params[:user_id]).recipes
        render json: @recipes
    end

    def show
        @recipe = Recipe.find_by_id(recipe_params[:id])
        render json: @recipe.with_ingredients
    end

    def create
        # NEED TO ACCOUNT FOR EDGE CASES & ERRORS
        binding.pry
        @recipe = Recipe.create(recipe_params)
        Ingredient.createRecipeIngredientsFromPantry(ingredient_params, @recipe.id)
        redirect_to user_recipe_path(User.find_by_id(@recipe.user_id), @recipe)
    end

    private

    def recipe_params
        params.permit(:id, :user_id, :name, :servings, :instructions)
    end

    # this is here to handle nested attributes of ingredients when sent from frontend form
    # need better standardization
    def ingredient_params 
        params[:ingredients] .map{|ingredient| {id: ingredient[:pantryIngredientId], quantity: ingredient[:quantity], unit: ingredient[:unit]}}
    end

end
