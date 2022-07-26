class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.datetime :date
      t.string :comment
      t.integer :score
      t.integer :record_id 

      t.timestamps
    end
  end
end
