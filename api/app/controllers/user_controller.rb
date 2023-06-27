class UserController < ApplicationController
    def show
        # @user = User.find(params[:id])
        @user = User.joins(:prefecture).select("*").find(params[:id])
        render json: @user
    end

    def update
        @user = User.find_by(id: params[:id])
        @user.name = params[:name]
        @user.hobby = params[:hobby]
        @user.content = params[:content]
        @user.save

        render json: {status: 'SUCCESS', message: 'Update Complete', data: @user}
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: { status: 'SUCCESS', message: 'Delete the user', data: @user}
    end
end
