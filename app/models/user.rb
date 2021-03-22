class User < ApplicationRecord
    has_one :pantry, dependent: :destroy
    has_many :grocery_lists, dependent: :destroy
    has_many :recipes, dependent: :destroy

    def send_initialization_info
        info = {
            id: self.id,
            name: self.name,
            pantry_id: self.pantry.id,
            pantry: self.pantry.ingredients_with_quantities
        }
    end

end
