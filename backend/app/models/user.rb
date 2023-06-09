
class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User

  has_many :board
  belongs_to :prefecture, foreign_key: 'prefecture_id', primary_key: 'id', class_name: 'Prefecture'
  belongs_to :subject, foreign_key: 'subject_id', primary_key: 'id', class_name: 'Subject'
  belongs_to :grade, foreign_key: 'grade_id', primary_key: 'id', class_name: 'Grade'
  belongs_to :gender, foreign_key: 'gender_id', primary_key: 'id', class_name: 'Gender'
end
