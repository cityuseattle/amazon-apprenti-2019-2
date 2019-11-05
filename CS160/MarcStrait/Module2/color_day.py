import datetime
import calendar

def color_of_mybirthday(date):
    # return 0 - 6
    born = datetime.datetime.strptime(date, '%m/%d/%Y').weekday()
    #['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday, 'Saturday', 'Sunday']
    day = calendar.day_name[born]
    if day == 'Sunday':
        color = 'Red'
    elif day == 'Monday':
        color = 'Yellow'
    elif day == 'Tuesday':
        color = 'Pink'
    elif day == 'Wednesday':
        color = 'Green'
    elif day == 'Thursday':
        color = 'Orange'
    elif day == 'Friday':
        color = 'Blue'
    elif day == 'Saturday':
        color = 'Purple'
    return (day, color)

date = input("What is your birthday? (mm/dd/yyyy): ")
day, color_day = color_of_mybirthday(date)
print("Color of my Birthday({}): {}".format(day, color_day))
