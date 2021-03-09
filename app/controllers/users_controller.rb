class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        # this needs to be moved to the User model
        @user = User.first
        ingredients = @user.pantry.ingredients
        hash = {name: @user.name, ingredients: ingredients}
        render json: hash
    end

end
