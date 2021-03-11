class User < ApplicationRecord
    has_one :pantry
    has_many :grocery_lists
    has_many :recipes

    def send_initialization_info
        info = {
            name: self.name,
            ingredients: self.pantry.ingredients
        }
    end

end
