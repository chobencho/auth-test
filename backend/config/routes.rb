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
      get '/user/:id/editResearchTag' => 'users#showEditResearchTag'
      post '/user/:id/edit' => 'users#edit'

      # boards
      get '/boards' => 'boards#index'

      # board
      get '/board/comments' => 'boards#getComments'
      get '/board/:id' => 'boards#show'
      get '/board/:id/getLike' => 'boards#getLike'
      get '/message/exist' => 'messages#exist'
      get '/board/:id/:edit' => 'boards#showEdit'
      post '/board/create' => 'boards#create'
      post '/board/createLike' => 'boards#createLike'
      post '/board/comment' => 'boards#createComment'
      post '/board/:id/:edit' => 'boards#edit'
      delete '/board/:id/deleteLike' => 'boards#deleteLike'

      # chat
      get '/messages' => 'messages#index'
      post '/chatCreate' => 'messages#chatCreate'

      # community
      get '/communities' => 'communities#index'
      get '/community/:id' => 'communities#show'
      get '/community/:id/subscribed' => 'communities#getSubscribed'
      get '/community/:id/comments' => 'communities#showComments'
      get '/allCommunity' => 'communities#getAllCommunity'
      get '/popularCommunity' => 'communities#getPopularCommunity'
      get '/newCommunity' => 'communities#getNewCommunity'
      post '/communityComment' => 'communities#create'
      post '/community/newSubscribed' => 'communities#subscribeCommunity'
      post '/community/sendMailApplyNewCommunity' => 'communities#sendMailApplyNewCommunity'
      delete '/withdrawCommunity' => 'communities#withdrawCommunity'

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
      post '/verification/:id/sendCertificateImage' => 'verifications#create'
      post '/verification/sendMail' => 'verifications#sendMail'

    end
  end
end
