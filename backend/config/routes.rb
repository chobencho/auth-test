Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      # users
      get '/users' => 'users#index'

      # user
      get '/user/:id' => 'users#show'
      get '/user/:id/edit' => 'users#showEdit'
      post '/user/:id/edit' => 'users#edit'

      # boards
      get '/boards' => 'boards#index'

      # board
      get '/board/:id' => 'boards#show'
      get '/board/:id/getLike' => 'boards#getLike'
      get '/message/exist' => 'messages#exist'
      get '/board/:id/:edit' => 'boards#showEdit'
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

      # ルーティングはroute.rbのファイルの上から順に評価される
      # ルーティングの実行される順番を把握することが大切
      # 検証画面 > Network > Name を見て、実際の実行の順番を把握する
      # 順番を把握できたら、このroute.rbにルーティングを書く
      # user,boardのようにページごとの処理に分けて、そこに実行順にルーティングを書く
      # 実際にUIを操作してみて問題がないことを確認(Networkで正確なJSONがJSONが返ってきていることも確認)


      
    end
  end
end
