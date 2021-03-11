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
        # NEED TO ACCOUNT FOR EDGE CASES 
        @recipe = Recipe.create(recipe_params)
        Ingredient.createRecipeIngredientsFromPantry(ingredient_params, @recipe.id)
        redirect_to user_recipe_path(User.find_by_id(@recipe.user_id), @recipe)
    end

    private

    def recipe_params
        params.permit(:user_id, :name, :servings, :instructions)
    end

    # this is here to handle nested attributes of ingredients when sent from UI page
    def ingredient_params 
        params[:ingredients] .map{|ingredient| {id: ingredient[:id], quantity: ingredient[:quantity], unit: ingredient[:unit]}}
    end

end
