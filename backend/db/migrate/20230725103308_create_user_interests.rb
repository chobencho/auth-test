class CreateUserInterests < ActiveRecord::Migration[7.0]
  def change
    create_table :user_interests do |t|
      t.integer :user_id, :null => false
      t.integer :interest_id, :null => false

      t.timestamps
    end
  end
end