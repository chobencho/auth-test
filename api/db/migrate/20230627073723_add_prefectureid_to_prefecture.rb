class AddPrefectureidToPrefecture < ActiveRecord::Migration[7.0]
  def change
    add_column :prefectures, :prefecture_id, :integer
  end
end
