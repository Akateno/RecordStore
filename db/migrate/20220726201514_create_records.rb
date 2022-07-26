class CreateRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :records do |t|
      t.string :name
      t.string :artist
      t.integer :release_date
      t.string :image
      t.integer :review_id
      t.integer :user_id

      t.timestamps
    end
  end
end
