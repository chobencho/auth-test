class AddCheckAgeAndRemoveHobbiesAndInterestsFromUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :check_age, :integer, default: 0, null: false
    remove_column :users, :hobby_id_1
    remove_column :users, :hobby_id_2
    remove_column :users, :hobby_id_3
    remove_column :users, :hobby_id_4
    remove_column :users, :hobby_id_5
    remove_column :users, :interest_id_1
    remove_column :users, :interest_id_2
    remove_column :users, :interest_id_3
  end
end
