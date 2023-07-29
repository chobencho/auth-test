class CreateUserResearchtags < ActiveRecord::Migration[7.0]
  def change
    create_table :user_researchtags do |t|
      t.integer :tag_id, :null => false
      t.integer :name, :null => false

      t.timestamps
    end
  end
end
