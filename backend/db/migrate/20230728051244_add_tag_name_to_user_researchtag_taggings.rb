class AddTagNameToUserResearchtagTaggings < ActiveRecord::Migration[7.0]
  def change
    add_column :user_researchtag_taggings, :tag_name, :string
  end
end

