class CreateUserHobbies < ActiveRecord::Migration[7.0]
  def change
    create_table :user_hobbies do |t|
      t.integer :user_id, :null => false
      t.integer :hobby_id, :null => false

      t.timestamps
    end
  end
end
