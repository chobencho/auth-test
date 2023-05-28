class CreateUserResearchTags < ActiveRecord::Migration[7.0]
  def change
    create_table :user_research_tags do |t|
      t.integer :user_id
      t.integer :tag_id
      t.timestamps
    end
  end
end
