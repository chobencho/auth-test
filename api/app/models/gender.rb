class Gender < ApplicationRecord
    belongs_to :user, foreign_key: 'id', primary_key: 'gender_id', class_name: 'User'
end
