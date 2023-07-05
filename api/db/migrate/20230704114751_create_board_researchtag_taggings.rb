class CreateBoardResearchtagTaggings < ActiveRecord::Migration[7.0]
  def change
    create_table :board_researchtag_taggings do |t|
      t.integer :board_id, null:false
      t.integer :tag_id, null:false

      t.timestamps
    end
  end
end
