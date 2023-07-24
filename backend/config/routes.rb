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

      # ���[�e�B���O��route.rb�̃t�@�C���̏ォ�珇�ɕ]�������
      # ���[�e�B���O�̎��s����鏇�Ԃ�c�����邱�Ƃ����
      # ���؉�� > Network > Name �����āA���ۂ̎��s�̏��Ԃ�c������
      # ���Ԃ�c���ł�����A����route.rb�Ƀ��[�e�B���O������
      # user,board�̂悤�Ƀy�[�W���Ƃ̏����ɕ����āA�����Ɏ��s���Ƀ��[�e�B���O������
      # ���ۂ�UI�𑀍삵�Ă݂Ė�肪�Ȃ����Ƃ��m�F(Network�Ő��m��JSON��JSON���Ԃ��Ă��Ă��邱�Ƃ��m�F)


      
    end
  end
end
