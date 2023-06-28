class Grade < ApplicationRecord
    belongs_to :user, foreign_key: 'id', primary_key: 'grade_id', class_name: 'User'
end
