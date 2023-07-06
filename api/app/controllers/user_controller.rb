class UserController < ApplicationController
  def show
    # @user = User.find(params[:id])
    @user = User.joins(:prefecture, :subject, :gender, :grade).select("*").find(params[:id])
    render json: @user  
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.name = params[:name]
    @user.body = params[:body]
    @user.age = params[:age]
    @user.gender_id = Gender.find_by(gender_code: params[:gender]).id
    @user.prefecture_id = Prefecture.find_by(prefecture_code: params[:prefecture]).id
    @user.grade_id = Grade.find_by(grade_code: params[:grade]).id
    @user.subject_id = Subject.find_by(subject_code: params[:subject]).id
    
    if @user.save
      render json: {status: 'SUCCESS', message: 'Update Complete', data: @user}
    else
      render json: {status: 'FAILURE', message: 'Update Fail', data: @user}
    end
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
