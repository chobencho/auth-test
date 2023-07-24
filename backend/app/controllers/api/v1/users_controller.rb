class Api::V1::UsersController < ApplicationController
  def index
      @users = User.joins(:prefecture, :subject, :gender, :grade).select("*, users.*").where.not(id: params[:string_my_id])
      render json: @users
  end

  def show
      @user = User.joins(:prefecture, :subject, :gender, :grade).select("*, users.id AS id").find_by(id: params[:id])
      render json: @user  
  end

  def showEdit
      @user = User.find_by(id: params[:id])
      render json: @user  
  end

  def edit
    @user = User.find_by(id: params[:id])
    if @user.update(user_edit_params)
      render json: @user
    else
      render json: {status: "error", message: "ユーザ情報の更新に失敗しました"}
    end
  end

  private

  def user_edit_params
    params.permit(:name, :image, :body, :age)
  end

end
