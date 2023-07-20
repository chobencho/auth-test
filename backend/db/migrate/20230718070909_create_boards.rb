class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.integer :user_id, :null => false
      t.string :title, :null => false
      t.string :image
      t.text :body, :null => false

      t.timestamps
    end
  end
end
