class ChangeResearchTagonBoardsToResearchTagOnBoards < ActiveRecord::Migration[7.0]
  def change
    rename_table :research_tagon_boards, :research_tag_on_boards
  end
end
