class CreateUserLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_likes do |t|
      t.integer :user_id, null: false
      t.integer :buddy_id, null: false

      t.timestamps
    end
  end
end
