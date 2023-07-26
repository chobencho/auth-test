class AddImageToCheckAges < ActiveRecord::Migration[7.0]
  def change
    add_column :check_ages, :image, :string
  end
end
