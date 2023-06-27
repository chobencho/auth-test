class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable # ← confirmableを追加する
  include DeviseTokenAuth::Concerns::User

  has_many :board
  # has_many :prefecture, :foreign_key => 'id' 
  belongs_to :prefecture, foreign_key: 'prefecture_id', primary_key: 'id', class_name: 'Prefecture'
end