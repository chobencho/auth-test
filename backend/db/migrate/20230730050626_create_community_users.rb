class CreateCommunityUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :community_users do |t|
      t.integer :community_id
      t.integer :user_id

      t.timestamps
    end
  end
end
