Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        passwords: 'api/v1/auth/passwords'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      # users
      get '/users' => 'users#index'

      # user
      get '/user/:id' => 'users#show'
      get '/user/:id/edit' => 'users#show'
      get '/user/:id/editHobby' => 'users#showEditHobby'
      get '/user/:id/editInterest' => 'users#showEditInterest'
      post '/user/:id/edit' => 'users#edit'

      # boards
      get '/boards' => 'boards#index'

      # board
      get '/board/:id' => 'boards#show'
      get '/board/:id/getLike' => 'boards#getLike'
      get '/message/exist' => 'messages#exist'
      get '/board/:id/:edit' => 'boards#showEdit'
      post '/board/create' => 'boards#create'
      post '/board/createLike' => 'boards#createLike'
      post '/board/:id/:edit' => 'boards#edit'
      delete '/board/:id/deleteLike' => 'boards#deleteLike'

      # chat
      get '/messages' => 'messages#index'
      post '/chatCreate' => 'messages#chatCreate'

      # message
      get '/message' => 'messages#chatPartner'
      get '/message/:id' => 'messages#show'
      post '/message' => 'messages#create'
      delete '/message/:id' => 'messages#destroy'

      #information
      get '/information' => 'infos#index'
      get '/info/:id' => 'infos#show'

      # mypage
      get '/myboard/:id' => 'boards#mypage'
      
      # myfav
      get '/boards/myFav' => 'boards#myfav'

      # verification
      post '/verification/sendCertificateImage' => 'verifications#create'
    end
  end
end
