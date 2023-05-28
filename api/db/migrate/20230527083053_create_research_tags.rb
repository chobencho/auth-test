class CreateResearchTags < ActiveRecord::Migration[7.0]
  def change
    create_table :research_tags do |t|
      t.integer :tag_id
      t.string :tag_name
      t.timestamps
    end
  end
end
