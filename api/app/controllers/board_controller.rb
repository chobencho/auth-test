class BoardController < ApplicationController

    def index
        @boards = User.joins(:board).select("*")
        render json: @boards
    end

    def show
        @board = User.joins(:board).select("*").find_by(board: {id: params[:id]})
        render json: @board
    end
    
end
