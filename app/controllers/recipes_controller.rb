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
        redirect_to recipe_path(@recipe)
    end

    private

    def recipe_params
        params.permit(:user_id, :name, :servings, :instructions)
    end

    def ingredient_params 
        params[:ingredients] .map{|ingredient| {id: ingredient[:id], quantity: ingredient[:quantity], unit: ingredient[:unit]}}
    end

end
