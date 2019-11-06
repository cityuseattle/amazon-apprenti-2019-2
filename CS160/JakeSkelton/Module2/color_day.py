import datetime
import calendar

def color_of_mybirthday(date):
    # return 0 - 6
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    #['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    day = calendar.day_name[born]
    if day == 'Sunday':
        color = 'Red'
    elif day == 'Monday':
        color = 'Burgundy'
    elif day == 'Tuesday':
        color == 'Salmon'
    elif day == 'Wednesday':
        color = 'Maroon'
    elif day == 'Thursday':
        color = 'Rose'
    elif day == 'Friday':
        color = 'Vermillion'
    elif day == 'Saturday':
        color = 'Persian'
    return (day, color)

date = input("What is your birthday? (mm/dd/yyyy): ")
day, color_day = color_of_mybirthday(date)
print("Color of my birthday({}): {}".format(day, color_day))
