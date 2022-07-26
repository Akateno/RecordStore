class CreateUserRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :user_records do |t|
      t.string :name
      t.string :artist
      t.integer :release_date
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
