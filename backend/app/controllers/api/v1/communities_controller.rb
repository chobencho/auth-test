class Api::V1::CommunitiesController < ApplicationController

  def index
    @community = Community.joins(:community_users).select("*, community_users.community_id AS id, community_users.user_id AS user_id").where(community_users: {user_id: params[:id]})
    render json: @community
  end

  def show
    @community =  Community.joins(:community_category).select('communities.*, community_categories.community_code').find_by(id: params[:id])
    render json: @community
  end

  def getSubscribed
    @community = CommunityUser.where(community_id: params[:community_id], user_id: params[:id]).present?
    render json: @community
  end
  
  def showComments
    @comments = CommunityComment.where(community_id: params[:id])
    render json: @comments
  end

  def getAllCommunity
    @community = Community.joins(:community_category).select('communities.*, community_categories.community_code')
    render json: @community
  end

  def getPopularCommunity
    # @community = Community.order(updated_at: :asc).limit(3)

    # 最新のコメントの更新順に、対応するcommunity_idを3つ取得
    latest_community_ids = CommunityComment.order(updated_at: :desc).pluck(:community_id)

    uniq_latest_community_ids = latest_community_ids.uniq.take(3)

    # latest_community_idsを使ってCommunityテーブルからデータを取得
    latest_communities = Community.where(id: uniq_latest_community_ids)


    render json: latest_communities
  end

  def getNewCommunity
    @community = Community.order(created_at: :asc).limit(3)
    render json: @community
  end

  def create
    comment = CommunityComment.new(comment_params)  
    if comment.save
      render json: {status: 200, message: "success community comment!"}
    else
      render json: {status: 200, message: "failed community comment!"}
    end
  end

  def subscribeCommunity
    community = CommunityUser.new(subscribe_params)
    if community.save
      render json: {status: 200, message: "success subscribe community!"}
    else
      render json: {status: 200, message: "failed subscribe community!"}
    end
  end

  def withdrawCommunity
    @community = CommunityUser.find_by(community_id: params[:community_id], user_id: params[:user_id])
    if @community.delete
      render json: {stutas: 200, message: "success withdraw community!"}
    else
      render json: {stutas: 400, message: "failed withdraw community!"}
    end
  end

  def sendMailApplyNewCommunity
    id = params[:string_my_id]
    title = params[:title]
    body = params[:body]

    ContactMailer.apply_email(id, title, body).deliver_now

    render json: {status: 200, message: "新規コミュニティの申請に成功しました。"}
end

  private

  def comment_params
    params.permit(:community_id, :user_id, :comment, :image)
  end

  def subscribe_params
    params.permit(:community_id, :user_id)
  end

end
