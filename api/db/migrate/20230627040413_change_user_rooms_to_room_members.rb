class ChangeUserRoomsToRoomMembers < ActiveRecord::Migration[7.0]
  def change
    rename_table :user_rooms, :room_members
  end
end
