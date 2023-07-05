class UserController < ApplicationController
  def show
    # @user = User.find(params[:id])
    @user = User.joins(:prefecture, :subject, :gender, :grade).select("*").find(params[:id])
    render json: @user  
  end

  def information
    @information = Information.all
    render json: @information
  end

  def info
      @info = Information.find(params[:id])
      render json: @info
  end
end
