class ChangeBoardlikesToBoardLikes < ActiveRecord::Migration[7.0]
  def change
    rename_table :boardlikes, :board_likes
  end
end
