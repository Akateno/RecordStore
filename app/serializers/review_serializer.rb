class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date, :comment, :score
end
