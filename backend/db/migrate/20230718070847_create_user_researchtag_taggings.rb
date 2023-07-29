class CreateUserResearchtagTaggings < ActiveRecord::Migration[7.0]
  def change
    create_table :user_researchtag_taggings do |t|
      t.integer :user_id, :null => false
      t.integer :tag_id, :null => false

      t.timestamps
    end
  end
end
