Rails.application.routes.draw do
  resources :users do 
    resources :pantries, only: [:show] 
    resources :grocery_lists
    resources :recipes
  end
  # resources :recipe_ingredients
  # resources :grocery_list_ingredients
  # resources :pantry_ingredients
  # resources :ingredients
  # resources :recipes
  # resources :grocery_lists
  # resources :pantries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
