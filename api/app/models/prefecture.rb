class Prefecture < ApplicationRecord
    # self.primary_key = 'prefecture_id'
    # belongs_to :user, :foreign_key => 'prefecture_id' 
    belongs_to :user, foreign_key: 'id', primary_key: 'prefecture_id', class_name: 'User'
end
