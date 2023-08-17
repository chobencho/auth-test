class AddImageToCommunityComments < ActiveRecord::Migration[7.0]
  def change
    add_column :community_comments, :image, :string
  end
end
