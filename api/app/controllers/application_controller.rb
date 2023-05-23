class ApplicationController < ActionController::API
        # 下記一行を追加
        include DeviseTokenAuth::Concerns::SetUserByToken
end