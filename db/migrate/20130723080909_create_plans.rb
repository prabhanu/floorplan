class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.text :drawing

      t.timestamps
    end
  end
end
