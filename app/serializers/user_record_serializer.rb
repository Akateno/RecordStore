class UserRecordSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :release_date, :image, :user_id
  has_one :user 
end
