class User < ApplicationRecord
    has_one :pantry, dependent: :destroy
    has_many :grocery_lists, dependent: :destroy
    has_many :recipes, dependent: :destroy
    has_many :weekly_menus, dependent: :destroy
    # can I do 1 line of has manys ??

    def send_initialization_info
        info = {
            id: self.id,
            name: self.name,
            pantry_id: self.pantry.id,
            pantry: self.pantry.ingredients_with_quantities,
            this_weeks_menu: WeeklyMenu.this_weeks_menu(self.id),
            weekly_menus: WeeklyMenu.get_this_month(self.id)
        }
    end

end
