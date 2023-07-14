Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      get '/users' => 'users#index'
      get '/user/:id' => 'users#show'

      get '/boards' => 'boards#index'
      get '/board/:id' => 'boards#show'
      
    end
  end
end
