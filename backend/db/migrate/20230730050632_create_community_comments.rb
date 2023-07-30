class CreateCommunityComments < ActiveRecord::Migration[7.0]
  def change
    create_table :community_comments do |t|
      t.integer :community_id
      t.integer :user_id
      t.string :comment

      t.timestamps
    end
  end
end
