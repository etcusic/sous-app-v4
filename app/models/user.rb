class User < ApplicationRecord
    has_one :pantry
    has_many :grocery_lists
    has_many :recipes
end
