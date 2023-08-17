class ChangeCommentToBodyInCommunityComments < ActiveRecord::Migration[7.0]
  def up
    rename_column :community_comments, :comment, :body
  end

  def down
    rename_column :community_comments, :body, :comment
  end
end
