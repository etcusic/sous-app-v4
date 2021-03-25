class WeeklyMenusController < ApplicationController

    def index
        binding.pry
    end

    def show
        @weekly_menu = WeeklyMenu.find_by_id(params[:id])
        render json: @weekly_menu.send_info
    end

    def create
        binding.pry
    end

    def update
        binding.pry
    end

    private

    def weekly_menu_params

    end

end
