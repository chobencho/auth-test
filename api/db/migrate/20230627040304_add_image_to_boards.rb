class AddImageToBoards < ActiveRecord::Migration[7.0]
  def change
    add_column :boards, :image, :string
  end
end
