Rails.application.routes.draw do
  get 'messages/index'
  # ログイン機能のルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  # ログインユーザー取得のルーティング
  namespace :auth do
    resources :sessions, only: %i[index]
  end

  get '/search' => 'search#show'

  post '/board/:id/update' => 'board#update'
  post '/board/create' => 'board#create'
  get '/boards/search/:id' => 'board#search'
  get '/board/:id' => 'board#show'
  get '/board/:id/edit' => 'board#show'
  get '/boards' => 'board#index'
  get '/myboards/:id' => 'board#myboards'

  post '/users/:id/update' => 'user#update'
  get '/users/:id' => 'user#show'
  delete '/users/:id/destroy' => 'user#destroy'
  get '/information' => 'user#information'
  get '/info/:id' => 'user#info'

  post '/message/:id/new' => 'message#new'
  get '/message/:id' => 'message#show'


end
