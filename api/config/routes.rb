Rails.application.routes.draw do
  # ログイン機能のルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  # ログインユーザー取得のルーティング
  namespace :auth do
    resources :sessions, only: %i[index]
  end

  # search_controller
  get '/search' => 'search#show'

  # board_controller
  get '/boards' => 'board#index'
  get '/board/:id' => 'board#show'
  post '/board/create' => 'board#create'

  get '/board/:id/edit' => 'board#show_edit'
  post '/board/:id/update' => 'board#update'
  post '/board/:id/likecreate' => 'board#likecreate'
  post '/board/:id/likedelete' => 'board#likedelete'
  get '/myboard/:id' => 'board#myboard'


  # user_controller
  get '/users/:id' => 'user#show'
  post '/users/:id/update' => 'user#update'

  get '/information' => 'user#information'
  get '/info/:id' => 'user#info'
  
end
