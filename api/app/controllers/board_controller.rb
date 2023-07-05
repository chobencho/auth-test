class BoardController < ApplicationController

    def index
        @boards = User.joins(:board).select("*")
        render json: @boards
    end
    
end
