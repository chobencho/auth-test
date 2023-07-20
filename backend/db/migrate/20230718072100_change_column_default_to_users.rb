class ChangeColumnDefaultToUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :gender_id, from: 0, to: 1
    change_column_default :users, :prefecture_id, from: 0, to: 1
    change_column_default :users, :grade_id, from: 0, to: 1
    change_column_default :users, :subject_id, from: 0, to: 1
    change_column_default :users, :hobby_id_1, from: 0, to: 1
    change_column_default :users, :hobby_id_2, from: 0, to: 1
    change_column_default :users, :hobby_id_3, from: 0, to: 1
    change_column_default :users, :hobby_id_4, from: 0, to: 1
    change_column_default :users, :hobby_id_5, from: 0, to: 1
    change_column_default :users, :interest_id_1, from: 0, to: 1
    change_column_default :users, :interest_id_2, from: 0, to: 1
    change_column_default :users, :interest_id_3, from: 0, to: 1
  end
end
