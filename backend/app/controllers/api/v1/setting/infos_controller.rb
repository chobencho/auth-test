class Api::V1::Setting::InfosController < ApplicationController
  def index
    @infos = Information.all
    render json: @infos
  end

  def show
    @info = Information.find_by(id: params[:id])
    render json: @info
  end
end
