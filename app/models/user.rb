class User < ApplicationRecord
    has_one :pantry, dependent: :destroy
    has_many :grocery_lists, dependent: :destroy
    has_many :recipes, dependent: :destroy

    def send_initialization_info
        info = {
            name: self.name,
            ingredients: self.pantry.ingredients
        }
    end

end
