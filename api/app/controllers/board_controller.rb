class BoardController < ApplicationController

    def index
        @boards = User.joins(:board).select("*")
        render json: @boards
    end

    def show
        @board = User.joins(:board).select("*, board.body AS board_body").find_by(board: {id: params[:id]})
        @like = BoardLike.find_by(user_id: params[:userId], board_id: params[:id])
        render json: {
            "board" => @board,
            "like" => @like
        }
    end

    def create
        @board = Board.new(user_id: params[:user_id], title: params[:title], image: "people.jpg", body: params[:body])
        @board.save
        render json: {status: 'SUCCESS', message: 'Board Create Complete', data: @board }
    end

    def update
        @board = Board.find_by(id: params[:id])
        @board.title = params[:title]
        @board.body = params[:body]
        if @board.save
            render json: {status: 'SUCCESS', message: 'Board Update Complete', data: @board}
        else
            render json: {status: 'FAILURE', message: 'Board Update Fail', data: @board}
        end
    end

    def show_edit
        @board = User.joins(:board).select("*, board.body AS board_body").find_by(board: {id: params[:id]})
        render json: @board
    end

    def myboard
        @board = User.joins(:board).select("*").where(users: {id: params[:id]})
        render json: @board
    end
    
    def likecreate
        @like = BoardLike.create(user_id: params[:userId], board_id: params[:id])
        render json: {status: 'SUCCESS', message: 'Favorite Create Complete!', data: @like}
    end

    def likedelete
        @like = BoardLike.find_by(user_id: params[:userId], board_id: params[:id]).delete
        render json: {status: 'SUCCESS', message: 'Favorite Delete Complete!', data: @like}
    end
end
