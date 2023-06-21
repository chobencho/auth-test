class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.integer :user_id
      t.string :title
      t.text :board_content
      
      t.timestamps
    end
  end
end
