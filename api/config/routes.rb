Rails.application.routes.draw do
  namespace :api do
    resources :home, only: [:index]
  end
end
