Rails.application.routes.draw do

  resources :ingredients

  resources :users do 
    resources :pantries, only: [:show] 
    resources :grocery_lists
    resources :recipes
  end

  # work on these routes -> nested??
  post '/new_ingredient' => 'ingredients#create_with_pantry' # should I put this under users resource??
  patch '/new_ingredient' => 'ingredients#update_with_pantry' # should I put this under users resource??

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
