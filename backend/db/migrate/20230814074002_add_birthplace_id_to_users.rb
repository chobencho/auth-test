class AddBirthplaceIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :birthplace_id, :integer, default: 1, null: false
  end
end
