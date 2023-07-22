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
      get '/user/:id/edit' => 'users#showEdit'
      post '/user/:id/edit' => 'users#edit'

      get '/boards' => 'boards#index'
      get '/board/:id' => 'boards#show'
      get '/board/:id/getLike' => 'boards#getLike'
      post '/board/:id/createLike' => 'boards#createLike'
      delete '/board/:id/deleteLike' => 'boards#deleteLike'
      get '/myboard/:id' => 'boards#mypage'

      get '/information' => 'infos#index'
      get '/info/:id' => 'infos#show'

      get '/messages' => 'messages#index'
      get '/message/exist' => 'messages#exist'
      post '/chatCreate' => 'messages#chatCreate'
      get '/message/:id' => 'messages#show'
      delete '/message/:id' => 'messages#destroy'
      post '/message' => 'messages#create'
      
    end
  end
end
