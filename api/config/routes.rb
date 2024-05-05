Rails.application.routes.draw do
  root 'home#index'

  scope 'api' do
    devise_for :users,
               path: '',
               path_names: {
                 sign_in: 'login',
                 sign_out: 'logout',
                 registration: 'users'
               },
               controllers: {
                 sessions: 'api/sessions',
                 registrations: 'api/registrations'
               },
               defaults: { format: :json }
  end

  namespace :api do
    root 'home#index'

    resources :current_user, only: %i[index]
  end
end
