class FixRemeberTokenColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :remember_token, :access_token
  end
end
