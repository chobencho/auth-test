class UserController < ApplicationController
    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: { status: 'SUCCESS', message: 'Delete the user', data: @user}
    end
end
