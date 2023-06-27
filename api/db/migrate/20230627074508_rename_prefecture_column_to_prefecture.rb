class RenamePrefectureColumnToPrefecture < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :prefecture, :prefecture_id
  end
end
