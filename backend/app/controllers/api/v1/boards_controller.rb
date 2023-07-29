class Api::V1::BoardsController < ApplicationController

    def index
        @boards = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image")

        render json: @boards
    end

    def show
        @board = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image").find_by(id: params[:id])
        
        render json: @board
    end

    def showEdit
        @board = Board.find_by(id: params[:id])
        render json: @board
    end

    def edit
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
          render json: @board
        else
          render json: {status: "error", message: "掲示板の編集に失敗しました"}
        end
      end

    def getLike
        @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).present?
        render json: @like
    end

    def create
        @board = Board.new(board_params)  
        @board.save
    end

    def createLike
        @like = BoardLike.create(user_id: params[:user_id], board_id: params[:board_id])
        render json: true
    end

    def deleteLike
        @like = BoardLike.find_by(user_id: params[:user_id], board_id: params[:id]).delete
        render json: false
    end

    def mypage
        @boards = Board.joins(:user).select("boards.*, boards.id AS board_id, boards.user_id, users.name, boards.title, boards.body AS board_body, boards.image AS url, users.image AS user_image").where(users: {id: params[:id]})
        render json: @boards
    end

    def myfav
        @boards = Board.joins(:board_likes).select("boards.*, board_likes.user_id AS user_id, board_likes.board_id AS board_id, boards.body AS board_body").where(board_likes: {user_id: params[:id]})
        render json: @boards
    end

    private

    def board_params
      params.permit(:user_id, :title, :image, :body)
    end
end
