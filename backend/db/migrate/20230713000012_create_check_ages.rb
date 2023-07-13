class CreateCheckAges < ActiveRecord::Migration[7.0]
  def change
    create_table :check_ages do |t|
      t.integer :user_id, :null => false
      t.integer :check_age, :null => false, :default => 0

      t.timestamps
    end
  end
end
