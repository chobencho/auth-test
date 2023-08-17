class CreateRoomMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :room_members do |t|
      t.integer :room_id, :null => false
      t.integer :user_id, :null => false

      t.timestamps
    end
  end
end
