class ChangeImageColumnTypeInUsers < ActiveRecord::Migration[7.0]
  def up
    change_column :users, :image, :text
  end

  def down
    change_column :users, :image, :string
  end
end
