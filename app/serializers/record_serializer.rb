class RecordSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :release_date, :image, :review_id, :user_id

  has_many :reviews
end
