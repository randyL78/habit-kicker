Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    root 'home#index'
  end
end
