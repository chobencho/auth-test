Rails.application.routes.draw do
  # ログイン機能のルーティング
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations'
  }
  # ログインユーザー取得のルーティング
  namespace :auth do
    resources :sessions, only: %i[index]
  end

  post '/users/:id/update' => 'user#update'

  # マイページ
  get '/users/:id' => 'user#show'

  delete '/users/:id/destroy' => 'user#destroy'



end
