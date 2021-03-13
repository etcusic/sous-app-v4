module IngredientProcessor
    def prepare_to_send
        self.attributes.merge!(ingredients: self.ingredients_with_quantities)
    end

    def ingredients_with_quantities
        joins = self.ingredients_join_info
        ingredients = self.ingredients.map.with_index do |ing, i| 
            ing.id == joins[i].ingredient_id ? ing.attributes.merge!(quantity: joins[i].quantity) : "Handle error"
        end
    end
end