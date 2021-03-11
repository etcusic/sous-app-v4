class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find_by_id(user_params[:id])
        render json: @user.send_initialization_info
    end

    private

    def user_params
        params.permit(:id)
    end

end
