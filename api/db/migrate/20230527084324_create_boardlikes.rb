class CreateBoardlikes < ActiveRecord::Migration[7.0]
  def change
    create_table :boardlikes do |t|
      t.integer :board_id
      t.timestamps
    end
  end
end
