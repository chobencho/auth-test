class Api::V1::UsersController < ApplicationController
  def index
      @users = User.joins(:prefecture, :subject, :gender, :grade).select("*, users.*").where.not(id: params[:string_my_id])
      render json: @users
  end

  def show
      @user = User.joins(:prefecture, :subject, :gender, :grade).select("*, users.id AS id").find_by(id: params[:id])
      render json: @user  
  end

  def showEditHobby
    @hobbies = UserHobby.joins(:hobby).select('user_hobbies.id', 'user_hobbies.user_id', 'user_hobbies.hobby_id', 'hobbies.hobby_code', 'user_hobbies.created_at', 'user_hobbies.updated_at').where(user_id: params[:id])
    render json: @hobbies
  end

  def showEditInterest
    @interests = UserInterest.joins(:interest).select('user_interests.id','user_interests.user_id', 'user_interests.interest_id', 'interests.interest_code', 'user_interests.created_at', 'user_interests.updated_at').where(user_id: params[:id])
    render json: @interests
  end

  def edit
    user_id = params[:id]
    hobby_ids = params[:hobby_ids]
    interest_ids = params[:interest_ids]

    ActiveRecord::Base.transaction do
      begin
        @user = User.find_by(id: user_id)
        @user.update(user_edit_params)

        unless interest_ids.nil?
          # 既存の興味データを削除
          @deleteInterest = UserInterest.where( user_id: user_id).destroy_all
          # 新しく興味データを作成
          # user_interestsテーブルに関連を登録する
          @interests = Interest.where(id: interest_ids)
          @user.interests << @interests
        end

        unless hobby_ids.nil?
          # 既存の趣味データを削除
          @deleteHobby = UserHobby.where( user_id: user_id).destroy_all
          # 新しく趣味データを作成
          # user_hobbiesテーブルに関連を登録する
          @hobbies = Hobby.where(id: hobby_ids)
          @user.hobbies << @hobbies
        end

        render json: { hobby_create: true, message: "成功" }
      rescue ActiveRecord::RecordInvalid => e
        render json: { hobby_create: false, message: "失敗" }
      end
    end

  end

  private

  def user_edit_params
    params.permit(
      :name,
      :image, 
      :body,
      :age,
      :gender_id,
      :grade_id,
      :prefecture_id,
      :subject_id,
      :interest_id_1,
      :interest_id_2,
      :interest_id_3
    )
  end


end

