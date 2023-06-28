class Subject < ApplicationRecord
    belongs_to :user, foreign_key: 'id', primary_key: 'subject_id', class_name: 'User'
end
