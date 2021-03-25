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
        # currently only accounting for 1 meal per daily menu
        @daily_menus = DailyMenu.create_and_update_meals(weekly_menu_params)
    end

    private

    def weekly_menu_params
        params.require(:_json).map do |x|
            x.permit(
                :id, 
                :date, 
                meals: [
                    :recipe_id, 
                    :quantity, 
                    :category
                ]
            )
        end
    end

end
