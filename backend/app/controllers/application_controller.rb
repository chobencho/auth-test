class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken
      
        protect_from_forgery
        helper_method :current_user, :user_signed_in?
end      
