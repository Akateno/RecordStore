class User < ApplicationRecord
    has_secure_password
    has_many :user_records, dependent: :destroy 
    has_many :reviews, through: :user_records
end
