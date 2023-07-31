class Api::V1::CommunitiesController < ApplicationController

  def index
    @community = Community.joins(:community_users).select("*, community_users.user_id AS user_id").where(community_users: {user_id: params[:id]})
    render json: @community
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
end
