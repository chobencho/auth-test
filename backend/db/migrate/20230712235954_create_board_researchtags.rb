class CreateBoardResearchtags < ActiveRecord::Migration[7.0]
  def change
    create_table :board_researchtags do |t|
      t.integer :tag_id, :null => false
      t.string :name, :null => false

      t.timestamps
    end
  end
end
