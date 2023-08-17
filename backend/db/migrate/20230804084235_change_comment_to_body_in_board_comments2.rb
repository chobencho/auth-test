class ChangeCommentToBodyInBoardComments2 < ActiveRecord::Migration[7.0]
  def up
    rename_column :board_comments, :comment, :body
  end

  def down
    rename_column :board_comments, :body, :comment
  end
end
