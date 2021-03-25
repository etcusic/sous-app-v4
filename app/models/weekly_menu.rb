class WeeklyMenu < ApplicationRecord
  belongs_to :user
  has_many :daily_menus
  has_many :meals, through: :daily_menus

  def self.find_week(user_id, date)
    sunday = self.find_last_sunday(date)
    saturday = sunday + 6
    self.find_or_create_by(user_id: user_id, start_date: sunday, end_date: saturday)
  end

  def self.find_last_sunday(day)
    day.strftime("%A") == "Sunday" ? day : self.find_last_sunday(day - 1)
  end

  def self.get_this_month(user_id)
    month = [self.find_week(user_id, Date.today)]
    3.times{ |i| month << self.find_week(user_id, (month[i].end_date + 1)) }
    month
  end

end
