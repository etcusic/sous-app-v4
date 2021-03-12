Rails.application.routes.draw do

  resources :ingredients
  resources :users do 
    resources :pantries, only: [:show] 
    resources :grocery_lists
    resources :recipes
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
