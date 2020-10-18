class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :name, null: false
      t.integer :score, null: false

      t.timestamps
    end
  end
end
