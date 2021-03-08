class PantriesController < ApplicationController

    def show
        # binding.pry
        params[:permitted] = true
        @ingredients = Pantry.find_by_id(params[:id]).ingredients
        #.map{| ing | {id: ing.id, name: ing.name, quantity: ing.quantity, unit: ing.unit, cost_per_unit: ing.cost_per_unit}}
        render json: @ingredients
    end

end
