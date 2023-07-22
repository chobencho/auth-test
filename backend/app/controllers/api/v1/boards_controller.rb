class Api::V1::BoardsController < ApplicationController

    def index
        @boards = User.joins(:board).select("users.*, boards.id AS board_id, boards.user_id AS user_id, boards.title AS board_title, boards.body AS board_body, boards.image AS board_image")
        render json: @boards
    end

    def show
        @board = User.joins(:board).select("board.id, user_id, name, title, board.body AS board__body,  board.image AS board_image, users.image AS user_image").find_by(board: {id: params[:id]})
        render json: @board  
    end

    def getLike
        @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).present?
        render json: @like
    end

    def createLike
        @like = BoardLike.create(user_id: params[:user_id], board_id: params[:id])
        render json: true
    end

    def deleteLike
        @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).delete
        render json: false
    end

    def mypage
        @boards = User.joins(:board).select("*").where(users: {id: params[:id]})
        render json: @boards
    end
end
