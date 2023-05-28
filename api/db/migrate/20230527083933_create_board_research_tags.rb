class CreateBoardResearchTags < ActiveRecord::Migration[7.0]
  def change
    create_table :board_research_tags do |t|
      t.integer :board_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
