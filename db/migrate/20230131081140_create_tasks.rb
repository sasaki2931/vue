class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :course
      t.string :season

      t.timestamps
    end
  end
end
