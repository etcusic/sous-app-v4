class WeeklyMenusController < ApplicationController

    def index
        binding.pry
    end

    def show
        menu = WeeklyMenu.find_by_id(params[:id])
        menu.get_daily_menus
        binding.pry
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
