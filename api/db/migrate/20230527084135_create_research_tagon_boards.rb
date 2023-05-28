class CreateResearchTagonBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :research_tagon_boards do |t|
      t.integer :tag_id
      t.string :name
      t.timestamps
    end
  end
end
