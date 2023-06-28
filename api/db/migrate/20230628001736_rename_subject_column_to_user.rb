class RenameSubjectColumnToUser < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :subject, :subject_id
    rename_column :users, :gender, :gender_id
    rename_column :users, :grade, :grade_id
  end
end
