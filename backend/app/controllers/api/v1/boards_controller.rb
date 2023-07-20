class Api::V1::BoardsController < ApplicationController

  def index
      @boards = User.joins(:board).select("users.*, boards.id AS board_id, boards.user_id AS user_id, boards.title AS board_title, boards.body AS board_body, boards.image AS board_image")
      render json: @boards
  end

  def show
      @board = User.joins(:board).select("*, board.body AS board_body").find_by(board: {id: params[:id]})
      render json: @board  
  end

  def mypage
      @boards = User.joins(:board).select("*").where(users: {id: params[:id]})
      render json: @boards
  end
end
