Rails.application.routes.draw do

  resources :ingredients

  resources :users do 
    resources :pantries, only: [:show] 
    resources :grocery_lists
    resources :recipes
    resources :weekly_menus
  end

  resources :pantries do 
    post '/new_ingredient' => 'ingredients#create_with_pantry' # should I put this under users resource??
    patch '/new_ingredient' => 'ingredients#update_with_pantry' # should I put this under users resource??
  end

  # work on these routes -> nested??

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
