class Api::V1::User::SearchesController < ApplicationController
    def show
        @users = User.where("name LIKE ?", "%#{params[:name]}%").where.not(id: params[:id])
        render json: @users
    end
end
