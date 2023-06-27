class AddAgeToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :age, :integer
    add_column :users, :gender, :integer
    add_column :users, :prefecture, :integer
    add_column :users, :grade, :integer
    add_column :users, :subject, :integer
    add_column :users, :hobby_1, :integer
    add_column :users, :hobby_2, :integer
    add_column :users, :hobby_3, :integer
    add_column :users, :interest_1, :integer
    add_column :users, :interest_2, :integer
    add_column :users, :interest_3, :integer
  end
end
