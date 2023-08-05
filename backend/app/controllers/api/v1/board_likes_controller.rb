class Api::V1::BoardLikesController < ApplicationController
  def show
    @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).present?
    render json: @like
  end

  def create
    @like = BoardLike.create(user_id: params[:user_id], board_id: params[:board_id])
    render json: true
  end

  def destroy
    @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).delete
    render json: false
  end
end
