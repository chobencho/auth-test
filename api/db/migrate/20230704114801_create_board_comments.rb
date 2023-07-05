class CreateBoardComments < ActiveRecord::Migration[7.0]
  def change
    create_table :board_comments do |t|
      t.integer :board_id, null:false
      t.string :comment, null:false

      t.timestamps
    end
  end
end
