class AddUserIdToBoardComments < ActiveRecord::Migration[7.0]
  def change
    add_column :board_comments, :user_id, :integer
  end
end
