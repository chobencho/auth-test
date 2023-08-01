class Api::V1::CommunitiesController < ApplicationController

  def index
    @community = Community.joins(:community_users).select("*, community_users.user_id AS user_id").where(community_users: {user_id: params[:id]})
    render json: @community
  end

  def show
    @community = Community.find_by(id: params[:id])
    render json: @community
  end
  
  def showComments
    @comments = CommunityComment.where(community_id: params[:id])
    render json: @comments
  end

  def getCategory
    @category = CommunityCategory.all
    render json: @category
  end

  def getPopularCommunity
    @community = Community.order(created_at: :desc).limit(3)
    render json: @community
  end

  def getNewCommunity
    @community = Community.order(created_at: :asc).limit(3)
    render json: @community
  end

  def create
    comment = CommunityComment.new(comment_params)  
    comment.save
  end

  private

  def comment_params
    params.permit(:community_id, :user_id, :comment, :image)
  end
end
