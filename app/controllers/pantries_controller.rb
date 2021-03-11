class PantriesController < ApplicationController

    def show
        @ingredients = Pantry.find_by_id(pantry_params[:id]).ingredients
        render json: @ingredients
    end

    private

    def pantry_params
        params.permit(:id)
    end

end
