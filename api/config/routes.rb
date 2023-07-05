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

  # user_controller
  get '/users/:id' => 'user#show'
  get '/information' => 'user#information'
  get '/info/:id' => 'user#info'
  
end
