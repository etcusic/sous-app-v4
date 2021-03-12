module IngredientProcessor

    def prepare_to_send
        x = self.attributes.merge!(ingredients: self.ingredients_with_quantities)
    end

    def ingredients_with_quantities
        joins = self.ingredients_join_info
        ingredients = self.ingredients.map.with_index{|ing, i| ing.attributes.merge!(quantity: joins[i].quantity) }
    end

end