class WeeklyMenu < ApplicationRecord
  belongs_to :user
  has_many :daily_menus
  has_many :meals, through: :daily_menus

  def sort_daily_menus_by_date
    # should need if I go by dates => self.week.map{|date| DailyMenu.find_or_create_by(weekly_menu_id: self.id, date: date)}
    # self.daily_menus.sort_by(:date)
  end

  def self.find_week(user_id, date)
    sunday = self.find_last_sunday(date)
    saturday = sunday + 6
    self.find_or_create_by(user_id: user_id, start_date: sunday, end_date: saturday)
  end

  def self.find_last_sunday(day)
    day.strftime("%A") == "Sunday" ? day : self.find_sunday(day - 1)
  end

  # def self.next_week
  #   week = [self.find_next_sunday(Date.today)]
  #   6.times{ |i| week << (week[i] + 1) }
  #   week
  # end

  # def self.find_next_sunday(day)
  #   day.strftime("%A") == "Sunday" ? day : self.find_sunday(day + 1)
  # end

  def self.send_this_month(user_id)
    month = [self.find_week(user_id, Date.today)]
    binding.pry
    3.times do |i|
      month << self.find_week(user_id, (month[i].end_date + 1))
    end
    binding.pry
    month
  end

end
