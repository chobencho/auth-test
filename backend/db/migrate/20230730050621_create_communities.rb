class CreateCommunities < ActiveRecord::Migration[7.0]
  def change
    create_table :communities do |t|
      t.integer :category_id
      t.string :title
      t.string :body
      t.string :image

      t.timestamps
    end
  end
end
