class WeeklyMenu < ApplicationRecord
  belongs_to :user
  has_many :daily_menus
  has_many :meals, through: :daily_menus

  def show_week
    week = {
      id: self.id,
      days: self.days_of_the_week
    }
  end

  def days_of_the_week
    week = [self.start_date]
    6.times{ |i| week << week[i] + 1 }
    week.map{ |day| day.strftime("%A, %b %d") }
  end

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
    month.map{|week| week.show_week}
  end

  def get_daily_menus
    week = []
    7.times do |i|
      week << DailyMenu.find_or_create_by(weekly_menu_id: self.id, date: (self.start_date + i))
    end
    week.map{|daily_menu| daily_menu.send_info }
  end

  def send_info
    info = {
      id: self.id,
      start_date: self.start_date.strftime("%A, %b %d"),
      daily_menus: self.get_daily_menus
    }
  end

  def self.this_weeks_menu(user_id)
    menu = self.find_or_create_by(user_id: user_id, start_date: self.find_last_sunday(Date.today))
    menu.send_info
  end

end
