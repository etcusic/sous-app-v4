class AbstractIngredient < ApplicationRecord
    self.abstract_class = true

    def name
        self.ingredient.name
    end

    def unit
        self.ingredient.unit
    end

    def cost_per_unit
        self.ingredient.cost_per_unit
    end

end