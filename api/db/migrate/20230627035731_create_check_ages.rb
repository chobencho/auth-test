class CreateCheckAges < ActiveRecord::Migration[7.0]
  def change
    create_table :check_ages do |t|
      t.integer :user_id
      t.integer :check_age

      t.timestamps
    end
  end
end
