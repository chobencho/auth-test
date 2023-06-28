class UserController < ApplicationController
    def show
        # @user = User.find(params[:id])
        @user = User.joins(:prefecture, :subject, :gender, :grade).select("*").find(params[:id])
        render json: @user
    end

    def update
        @user = User.find_by(id: params[:id])
        @gender = Gender.find_by(gender_code: params[:gender])
        @prefecture = Prefecture.find_by(code: params[:prefecture])
        @grade = Grade.find_by(grade_code: params[:grade])
        @subject = Subject.find_by(subject_code: params[:subject])
        @user.name = params[:name]
        @user.content = params[:content]
        @user.age = params[:age]
        @user.gender_id = @gender.id
        @user.prefecture_id = @prefecture.id
        @user.grade_id = @grade.id
        @user.subject_id = @subject.id
        @user.save

        render json: {status: 'SUCCESS', message: 'Update Complete', data: @user}
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: { status: 'SUCCESS', message: 'Delete the user', data: @user}
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
