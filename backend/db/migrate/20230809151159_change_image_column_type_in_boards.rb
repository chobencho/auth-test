class ChangeImageColumnTypeInBoards < ActiveRecord::Migration[7.0]
  def up
    change_column :boards, :image, :text
  end

  def down
    change_column :boards, :image, :string
  end
end
