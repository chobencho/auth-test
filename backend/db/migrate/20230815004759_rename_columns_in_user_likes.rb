class RenameColumnsInUserLikes < ActiveRecord::Migration[7.0]
  def change
    rename_column :user_likes, :user_id, :my_id
    rename_column :user_likes, :buddy_id, :user_id
  end
end
