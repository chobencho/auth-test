class BoardController < ApplicationController

    def index
        @boards = Board.all
        render json: @boards
    end

    def show
        @board = Board.find_by(id: params[:id])
        render json: @board
    end

    def create
        @board = Board.new(user_id: params[:user_id], title: params[:title], content: params[:content])
        @board.save

        render json: {status: 'SUCCESS', message: 'Board Create Complete', data: @board }
    end

    def update
        @board = Board.find_by(id: params[:id])
        @board.title = params[:title]
        @board.content = params[:content]
        @board.save

        render json: {status: 'SUCCESS', message: 'Board Update Complete', data: @board}
    end

    def search
        @keyword = params[:id]
        @boards = Board.where("title LIKE ?", "%#{@keyword}%").or(Board.where("content LIKE ?", "%#{@keyword}%"))
        render json: @boards
    end
end
