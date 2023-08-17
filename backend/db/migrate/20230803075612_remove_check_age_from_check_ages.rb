class RemoveCheckAgeFromCheckAges < ActiveRecord::Migration[7.0]
  def change
    remove_column :check_ages, :check_age
  end
end
