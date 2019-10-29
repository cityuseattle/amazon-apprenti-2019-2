import datetime
import calendar

def color_of_my_birthday(date):
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    colorday = {
        "Sunday": "Red",
        "Monday": "Yellow",
        "Tuesday": "Pink",
        "Wednesday": "Green",
        "Thursday": "Orange",
        "Friday": "Blue",
        "Saturday": "Purple",
    }
    day = calendar.day_name[born]
    return (day, colorday[day])

date = input("What is your birthday? (mm/dd/yyy): ")
day, color_day = color_of_my_birthday(date)
print("Color of my birthday ({}): {}".format(day, color_day))
