class Api::V1::UsersController < ApplicationController
    def index
        # @users = User.joins(:prefecture, :subject, :gender, :grade).select("*").find(params[:id])
        @users = User.joins(:prefecture, :subject, :gender, :grade).select("*")
        render json: @users
    end
end
